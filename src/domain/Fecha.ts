import { Equipo } from "./Equipo";

export class Fecha {
    local: Equipo
    visitante: Equipo
    fechaHoraInicio: Date
    lugar: string

    iniciado: boolean = false

    setsLocal: { [key: number]: number } = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    }
    setsVisitante: { [key: number]: number } = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    }

    constructor(init?: Partial<Fecha>) {
        Object.assign(this, init)
    }


    setsGanadosLocal() { //hacer más declarativo y unificar con setGanadosVisitante
        var count = 0
        for (var value in this.setsLocal) {
            if (this.criterioWinSet(this.setsLocal[value], this.setsVisitante[value])) {
                count++
            }
        }
        return count
    }

    setsGanadosVisitante() {
        var count = 0
        for (var value in this.setsVisitante) {
            if (this.criterioWinSet(this.setsVisitante[value], this.setsLocal[value])) {
                count++
            }
        }
        return count
    }

    static fromJson(fechaJson) {
        var nuevaFecha = Object.assign(new Fecha(), fechaJson)
        nuevaFecha.fechaHoraInicio = new Date(fechaJson.fechaHoraInicio)
        return nuevaFecha
    }

    criterioWinSet(scoreA: number, scoreB: number) {
        return (scoreA >= 25) && (scoreA >= (scoreB + 2))
    }

}
