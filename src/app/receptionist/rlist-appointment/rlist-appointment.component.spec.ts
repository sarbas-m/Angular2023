import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlistAppointmentComponent } from './rlist-appointment.component';

describe('RlistAppointmentComponent', () => {
  let component: RlistAppointmentComponent;
  let fixture: ComponentFixture<RlistAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlistAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlistAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
