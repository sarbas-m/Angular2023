import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrescriptionComponent } from './list-prescription.component';

describe('ListPrescriptionComponent', () => {
  let component: ListPrescriptionComponent;
  let fixture: ComponentFixture<ListPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
