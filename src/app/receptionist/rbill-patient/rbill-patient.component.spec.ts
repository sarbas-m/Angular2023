import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbillPatientComponent } from './rbill-patient.component';

describe('RbillPatientComponent', () => {
  let component: RbillPatientComponent;
  let fixture: ComponentFixture<RbillPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbillPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbillPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
