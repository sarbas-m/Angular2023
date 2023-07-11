import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaddPatientComponent } from './radd-patient.component';

describe('RaddPatientComponent', () => {
  let component: RaddPatientComponent;
  let fixture: ComponentFixture<RaddPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaddPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
