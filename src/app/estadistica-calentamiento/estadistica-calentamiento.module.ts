import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticaCalentamientoContenidoComponent } from './estadistica-calentamiento-contenido/estadistica-calentamiento-contenido.component';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    EstadisticaCalentamientoContenidoComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class EstadisticaCalentamientoModule { }
