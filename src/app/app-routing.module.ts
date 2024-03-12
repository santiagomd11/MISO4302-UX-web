import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaCalentamientoContenidoComponent } from './estadistica-calentamiento/estadistica-calentamiento-contenido/estadistica-calentamiento-contenido.component';
import { InicioSesionContenidoComponent } from './inicio-sesion/inicio-sesion-contenido/inicio-sesion-contenido.component';

const routes: Routes = [
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
  { path: 'estadistica-calentamiento', component: EstadisticaCalentamientoContenidoComponent,  pathMatch: 'full' },
  { path: 'iniciar-sesion', component: InicioSesionContenidoComponent,  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
