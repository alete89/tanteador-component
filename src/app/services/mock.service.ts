import { Injectable } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { Equipo } from 'src/domain/Equipo';
import { Set } from 'src/domain/Set';
import { Service } from './service';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MockService {
  local: Equipo = new Equipo({ "nombre": "Riber" })
  visitante: Equipo = new Equipo({ "nombre": "Boca" })

  constructor() { }

  fecha = new Fecha ({
    "local": this.local,
    "visitante": this.visitante,
    "fechaHoraInicio": new Date(2018, 3, 20, 23, 30),
    "lugar": "Estadio Único",
    "iniciado": true,
    "setsLocal": {
      1: 24,
      2: 25,
      3: 18,
      4: 25,
      5: 28
    },
    "setsVisitante": {
      1: 26,
      2: 18,
      3: 25,
      4: 27,
      5: 26
    }
  })

  unaFecha(): Observable<Fecha> {
    return of(this.fecha)

  }

}