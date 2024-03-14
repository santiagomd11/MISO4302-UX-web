import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaContenidoComponent } from './cuenta-contenido.component';

describe('CuentaContenidoComponent', () => {
  let component: CuentaContenidoComponent;
  let fixture: ComponentFixture<CuentaContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaContenidoComponent]
    });
    fixture = TestBed.createComponent(CuentaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
