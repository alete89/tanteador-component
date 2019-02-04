import { Component, OnInit} from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';

@Component({
  selector: 'app-tanteador',
  templateUrl: './tanteador.component.html',
  styleUrls: ['./tanteador.component.css']
})
export class TanteadorComponent implements OnInit {

  constructor(private mockService: MockService) { }

  /*async ngOnInit() {
    this.fecha = await this.mockService.unaFecha()
  }*/
  ngOnInit() {
    this.unaFecha();
  }

  unaFecha(){
    this.mockService.unaFecha().subscribe(datos=>this.fecha=datos)
  }

  isReady() {
    return this.fecha != undefined
  }

  fecha: Fecha;

  add(): void{
    this.fecha.setsLocal[1]++
    console.log(this.fecha)
  }
}
