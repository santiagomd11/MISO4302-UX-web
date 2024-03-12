import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaCalentamientoContenidoComponent } from './estadistica-calentamiento-contenido.component';

describe('EstadisticaCalentamientoContenidoComponent', () => {
  let component: EstadisticaCalentamientoContenidoComponent;
  let fixture: ComponentFixture<EstadisticaCalentamientoContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadisticaCalentamientoContenidoComponent]
    });
    fixture = TestBed.createComponent(EstadisticaCalentamientoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
