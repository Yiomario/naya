import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioprogramacionPage } from './usuarioprogramacion.page';

describe('UsuarioprogramacionPage', () => {
  let component: UsuarioprogramacionPage;
  let fixture: ComponentFixture<UsuarioprogramacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioprogramacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
