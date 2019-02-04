import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PartidoComponent } from './components/partido/partido.component';
import { HttpModule } from '@angular/http';
import { TanteadorComponent } from './components/tanteador/tanteador.component';


@NgModule({
  declarations: [
    AppComponent,
    PartidoComponent,
    TanteadorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
