import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorPatientComponent } from './list-doctor-patient.component';

describe('ListDoctorPatientComponent', () => {
  let component: ListDoctorPatientComponent;
  let fixture: ComponentFixture<ListDoctorPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoctorPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
