import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { EstadisticaCalentamientoModule } from './estadistica-calentamiento/estadistica-calentamiento.module';
import { RegistroModule } from './registro/registro.module';
import { EstadisticasRutinaModule } from './estadisticas-rutina/estadisticas-rutina.module';
import { CuentaModule } from './cuenta/cuenta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    EstadisticaCalentamientoModule,
    RegistroModule,
    EstadisticasRutinaModule,
    CuentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
