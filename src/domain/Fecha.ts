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


    setsGanadosLocal() {
        return 0
    }

    setsGanadosVisitante() {
        return 0
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
