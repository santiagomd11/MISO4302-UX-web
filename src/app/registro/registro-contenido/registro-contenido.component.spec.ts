import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroContenidoComponent } from './registro-contenido.component';

describe('RegistroContenidoComponent', () => {
  let component: RegistroContenidoComponent;
  let fixture: ComponentFixture<RegistroContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroContenidoComponent]
    });
    fixture = TestBed.createComponent(RegistroContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
