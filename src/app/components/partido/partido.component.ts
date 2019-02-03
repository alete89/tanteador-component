import { Component, OnInit } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { allowSanitizationBypass } from '@angular/core/src/sanitization/bypass';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';
import { BackendServiceService } from 'src/app/services/backend-service.service';


@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  fecha: Fecha

  constructor(private mockService: MockService, private service: BackendServiceService) { }

  async ngOnInit() {
    this.fecha = await this.mockService.unaFecha()
  }

  isReady() {
    return this.fecha != undefined
  }

}
