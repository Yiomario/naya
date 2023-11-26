import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsingaturasPage } from './asingaturas.page';

describe('AsingaturasPage', () => {
  let component: AsingaturasPage;
  let fixture: ComponentFixture<AsingaturasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsingaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
