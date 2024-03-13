import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasRutinaContenidoComponent } from './estadisticas-rutina-contenido/estadisticas-rutina-contenido.component';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    EstadisticasRutinaContenidoComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [EstadisticasRutinaContenidoComponent]
})
export class EstadisticasRutinaModule { }
