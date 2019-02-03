import { Equipo } from "./Equipo";

export class Fecha {
    local: Equipo
    visitante: Equipo
    fechaHoraInicio: Date
    lugar: string

    iniciado: boolean = false
    setsGanadosLocal: number = 0
    setsGanadosVisitante: number = 0

    set1local: number = 0
    set2local: number = 0
    set3local: number = 0
    set4local: number = 0
    set5local: number = 0

    set1visitante: number = 0
    set2visitante: number = 0
    set3visitante: number = 0
    set4visitante: number = 0
    set5visitante: number = 0


    static fromJson(fechaJson) {
        var nuevaFecha = Object.assign(new Equipo(), fechaJson)
        nuevaFecha.fechaHoraInicio = new Date(fechaJson.fechaHoraInicio)
        return nuevaFecha
    }
}
