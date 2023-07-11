import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlistPatientComponent } from './rlist-patient.component';

describe('RlistPatientComponent', () => {
  let component: RlistPatientComponent;
  let fixture: ComponentFixture<RlistPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlistPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlistPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
