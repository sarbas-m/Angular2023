import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditPatientComponent } from './redit-patient.component';

describe('ReditPatientComponent', () => {
  let component: ReditPatientComponent;
  let fixture: ComponentFixture<ReditPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReditPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReditPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
