import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FolderalumnoPage } from './folderalumno.page';

describe('FolderalumnoPage', () => {
  let component: FolderalumnoPage;
  let fixture: ComponentFixture<FolderalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FolderalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
