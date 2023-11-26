import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariocalidadPage } from './usuariocalidad.page';

describe('UsuariocalidadPage', () => {
  let component: UsuariocalidadPage;
  let fixture: ComponentFixture<UsuariocalidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariocalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
