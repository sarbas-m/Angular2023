import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicineReorderComponent } from './list-medicine-reorder.component';

describe('ListMedicineReorderComponent', () => {
  let component: ListMedicineReorderComponent;
  let fixture: ComponentFixture<ListMedicineReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicineReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicineReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
