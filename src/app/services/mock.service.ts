import { Injectable } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { Equipo } from 'src/domain/Equipo';
import { Set } from 'src/domain/Set';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class MockService implements Service {
  river: Equipo = new Equipo()
  boca: Equipo = new Equipo()

  constructor() { }

  async unaFecha() {
    const fecha = new Fecha()
    this.river.nombre = "River"
    this.river.logoUrl = "../../../assets/logos/0002.png"
    this.boca.nombre = "Boca"
    this.boca.logoUrl = "../../../assets/logos/0001.png"
    fecha.local = this.river
    fecha.visitante = this.boca
    fecha.fechaHoraInicio = new Date(2018, 11, 20, 23, 30)
    fecha.lugar = "Estadio Monumental"
    fecha.iniciado = true
    fecha.sets = [new Set(25, 22), new Set(25, 18), new Set(18, 25), new Set(25, 27), new Set(28, 26)]

    return fecha
  }

  async unEquipo() {

  }

}
