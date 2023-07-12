import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisableAppointmentComponent } from './list-disable-appointment.component';

describe('ListDisableAppointmentComponent', () => {
  let component: ListDisableAppointmentComponent;
  let fixture: ComponentFixture<ListDisableAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisableAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisableAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
