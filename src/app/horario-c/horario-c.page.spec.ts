import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioCPage } from './horario-c.page';

describe('HorarioCPage', () => {
  let component: HorarioCPage;
  let fixture: ComponentFixture<HorarioCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
