
export class Set {

    puntosLocal: number = 0
    puntosVisitante: number = 0
    puntosParaGanar: number


    constructor(init?: Partial<Set>) {
        this.puntosLocal = 0
        this.puntosVisitante = 0
        this.puntosParaGanar = 25
        Object.assign(this, init)
    }

    ganoLocal() {
        return (this.puntosLocal >= this.puntosParaGanar) && (this.puntosLocal >= (this.puntosVisitante + 2))
    }

    ganoVisitante() {
        return (this.puntosVisitante >= this.puntosParaGanar) && (this.puntosVisitante >= (this.puntosLocal + 2))
    }

    finalizo(){
        return this.ganoLocal() || this.ganoVisitante()
    }

    static fromJson(setJson) {
        var nuevoSet = Object.assign(new Set(), setJson)
        return nuevoSet
    }
}