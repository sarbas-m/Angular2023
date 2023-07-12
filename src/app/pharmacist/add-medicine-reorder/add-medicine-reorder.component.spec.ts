import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineReorderComponent } from './add-medicine-reorder.component';

describe('AddMedicineReorderComponent', () => {
  let component: AddMedicineReorderComponent;
  let fixture: ComponentFixture<AddMedicineReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicineReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
