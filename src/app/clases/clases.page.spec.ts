import { ComponentFixture, TestBed } from '@angular/core/testing';
import { clasesPage } from './clases.page';

describe('clasesPage', () => {
  let component: clasesPage;
  let fixture: ComponentFixture<clasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(clasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
