import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioarquitecturaPage } from './usuarioarquitectura.page';

describe('UsuarioarquitecturaPage', () => {
  let component: UsuarioarquitecturaPage;
  let fixture: ComponentFixture<UsuarioarquitecturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioarquitecturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
