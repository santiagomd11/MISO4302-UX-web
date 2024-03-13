import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaCalentamientoContenidoComponent } from './estadistica-calentamiento/estadistica-calentamiento-contenido/estadistica-calentamiento-contenido.component';
import { InicioSesionContenidoComponent } from './inicio-sesion/inicio-sesion-contenido/inicio-sesion-contenido.component';
import { RegistroContenidoComponent } from './registro/registro-contenido/registro-contenido.component';
import { EstadisticasRutinaContenidoComponent } from './estadisticas-rutina/estadisticas-rutina-contenido/estadisticas-rutina-contenido.component';

const routes: Routes = [
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
  { path: 'estadistica-calentamiento', component: EstadisticaCalentamientoContenidoComponent,  pathMatch: 'full' },
  { path: 'estadistica-rutina', component: EstadisticasRutinaContenidoComponent,  pathMatch: 'full' },
  { path: 'iniciar-sesion', component: InicioSesionContenidoComponent,  pathMatch: 'full' },
  { path: 'registrarse', component: RegistroContenidoComponent,  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
