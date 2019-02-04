import { Component, OnInit } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';

@Component({
  selector: 'app-tanteador',
  templateUrl: './tanteador.component.html',
  styleUrls: ['./tanteador.component.css']
})
export class TanteadorComponent implements OnInit {
  fecha: Fecha;

  constructor(private mockService: MockService) { }

  ngOnInit() {
    this.unaFecha()
  }

  async unaFecha() {
    this.fecha = await this.mockService.unaFecha()
  }

  isReady() {
    return this.fecha != undefined
  }


  add(): void {
    this.fecha.sets[0].puntosLocal++
    console.log(this.fecha)
  }
}
