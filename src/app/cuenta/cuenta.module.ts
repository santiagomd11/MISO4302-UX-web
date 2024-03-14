import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu/menu.module';
import { CuentaContenidoComponent } from './cuenta-contenido/cuenta-contenido.component';



@NgModule({
  declarations: [
    CuentaContenidoComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [CuentaContenidoComponent]
})
export class CuentaModule { }
