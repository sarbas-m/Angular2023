import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorPatienthistoryComponent } from './list-doctor-patienthistory.component';

describe('ListDoctorPatienthistoryComponent', () => {
  let component: ListDoctorPatienthistoryComponent;
  let fixture: ComponentFixture<ListDoctorPatienthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoctorPatienthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorPatienthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
