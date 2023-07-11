import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorTestComponent } from './add-doctor-test.component';

describe('AddDoctorTestComponent', () => {
  let component: AddDoctorTestComponent;
  let fixture: ComponentFixture<AddDoctorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
