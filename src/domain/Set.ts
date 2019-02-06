
export class Set {

    puntosLocal: number = 0
    puntosVisitante: number = 0

    constructor(puntosLocal?: number, puntosVisitante?: number) {
        this.puntosLocal = puntosLocal
        this.puntosVisitante = puntosVisitante

    }

    ganoLocal() {
        return (this.puntosLocal >= 25) && (this.puntosLocal >= (this.puntosVisitante + 2))
    }

    ganoVisitante() {
        return (this.puntosVisitante >= 25) && (this.puntosVisitante >= (this.puntosLocal + 2))
    }

    static fromJson(setJson) {
        var nuevoSet = Object.assign(new Set(), setJson)
        return nuevoSet
    }
}