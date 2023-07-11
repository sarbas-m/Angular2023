import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorAppointmentComponent } from './list-doctor-appointment.component';

describe('ListDoctorAppointmentComponent', () => {
  let component: ListDoctorAppointmentComponent;
  let fixture: ComponentFixture<ListDoctorAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoctorAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
