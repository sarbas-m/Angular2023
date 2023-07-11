import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbookAppointmentComponent } from './rbook-appointment.component';

describe('RbookAppointmentComponent', () => {
  let component: RbookAppointmentComponent;
  let fixture: ComponentFixture<RbookAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbookAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
