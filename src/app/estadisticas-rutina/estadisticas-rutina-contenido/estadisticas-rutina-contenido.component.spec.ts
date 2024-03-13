import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasRutinaContenidoComponent } from './estadisticas-rutina-contenido.component';

describe('EstadisticasRutinaContenidoComponent', () => {
  let component: EstadisticasRutinaContenidoComponent;
  let fixture: ComponentFixture<EstadisticasRutinaContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadisticasRutinaContenidoComponent]
    });
    fixture = TestBed.createComponent(EstadisticasRutinaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
