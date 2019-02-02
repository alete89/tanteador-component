import { Equipo } from "./Equipo";

export class Fecha {
    local: Equipo
    visitante: Equipo
    fechaHoraInicio: Date
    lugar: string

    static fromJson(fechaJson) {
        var nuevaFecha = Object.assign(new Equipo(), fechaJson)
        nuevaFecha.fechaHoraInicio = new Date(fechaJson.fechaHoraInicio)
        return nuevaFecha
    }
}
