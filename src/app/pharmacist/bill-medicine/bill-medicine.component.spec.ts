import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillMedicineComponent } from './bill-medicine.component';

describe('BillMedicineComponent', () => {
  let component: BillMedicineComponent;
  let fixture: ComponentFixture<BillMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
