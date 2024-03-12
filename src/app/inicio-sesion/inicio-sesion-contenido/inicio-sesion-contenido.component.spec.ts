import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionContenidoComponent } from './inicio-sesion-contenido.component';

describe('InicioSesionContenidoComponent', () => {
  let component: InicioSesionContenidoComponent;
  let fixture: ComponentFixture<InicioSesionContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionContenidoComponent]
    });
    fixture = TestBed.createComponent(InicioSesionContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
