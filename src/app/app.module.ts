import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PartidoComponent } from './components/partido/partido.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PartidoComponent,
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
