import { Injectable } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { Equipo } from 'src/domain/Equipo';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  local: Equipo = new Equipo({ "nombre": "River" })
  visitante: Equipo = new Equipo({ "nombre": "Boca" })

  constructor() { }

  async unaFecha() {
    return new Fecha({
      "local": this.local,
      "visitante": this.visitante,
      "fechaHoraInicio": new Date(2018, 11, 20, 23, 30),
      "lugar": "Estadio Único",
      "iniciado": true,
      "setsLocal": {
        1: 25,
        2: 25,
        3: 18,
        4: 25,
        5: 28
      },
      "setsVisitante": {
        1: 22,
        2: 18,
        3: 25,
        4: 27,
        5: 26
      }
    })
  }

}
