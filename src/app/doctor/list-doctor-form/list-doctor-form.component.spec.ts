import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorFormComponent } from './list-doctor-form.component';

describe('ListDoctorFormComponent', () => {
  let component: ListDoctorFormComponent;
  let fixture: ComponentFixture<ListDoctorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoctorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
