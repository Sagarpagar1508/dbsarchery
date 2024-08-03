import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAppointmentComponent } from './coach-appointment.component';

describe('CoachAppointmentComponent', () => {
  let component: CoachAppointmentComponent;
  let fixture: ComponentFixture<CoachAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachAppointmentComponent]
    });
    fixture = TestBed.createComponent(CoachAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
