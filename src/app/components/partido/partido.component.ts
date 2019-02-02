import { Component, OnInit } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { allowSanitizationBypass } from '@angular/core/src/sanitization/bypass';
import { MockService } from 'src/app/mock.service';


@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  fecha: Fecha

  constructor(private mockService: MockService) { }

  async ngOnInit() {
    this.fecha = await this.mockService.unaFecha()
  }

  isReady() {
    return this.fecha != undefined
  }

}
