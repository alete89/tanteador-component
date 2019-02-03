export class Equipo {
    nombre: string
    logoUrl: string


    constructor(init?: Partial<Equipo>) {
        Object.assign(this, init)
    }

    static fromJson(EquipoJson) {
        return Object.assign(new Equipo(), EquipoJson)
    }
}
