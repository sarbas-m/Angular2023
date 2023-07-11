import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorMedicineComponent } from './add-doctor-medicine.component';

describe('AddDoctorMedicineComponent', () => {
  let component: AddDoctorMedicineComponent;
  let fixture: ComponentFixture<AddDoctorMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
