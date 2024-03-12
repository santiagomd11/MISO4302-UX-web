import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaCalentamientoContenidoComponent } from './estadistica-calentamiento/estadistica-calentamiento-contenido/estadistica-calentamiento-contenido.component';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: NavBarComponent,  pathMatch: 'full' },
  { path: 'estadistica-calentamiento', component: EstadisticaCalentamientoContenidoComponent,  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
