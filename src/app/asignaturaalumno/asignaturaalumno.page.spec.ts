import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaalumnoPage } from './asignaturaalumno.page';

describe('AsignaturaalumnoPage', () => {
  let component: AsignaturaalumnoPage;
  let fixture: ComponentFixture<AsignaturaalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
