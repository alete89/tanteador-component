export class Equipo {
    nombre: string
    logoUrl: string

    static fromJson(EquipoJson) {
        return Object.assign(new Equipo(), EquipoJson)
    }
}
