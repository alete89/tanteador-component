import { Injectable } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { Equipo } from 'src/domain/Equipo';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  river: Equipo = new Equipo()
  boca: Equipo = new Equipo()

  constructor() { }

  async unaFecha() {
    const fecha = new Fecha()
    this.river.nombre = "River"
    this.boca.nombre = "Boca"
    fecha.local = this.river
    fecha.visitante = this.boca
    fecha.fechaHoraInicio = new Date(2018, 11, 20, 23, 30)
    fecha.lugar = "Estadio Monumental"

    return fecha
  }

}
