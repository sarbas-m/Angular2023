import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPmedicineComponent } from './add-pmedicine.component';

describe('AddPmedicineComponent', () => {
  let component: AddPmedicineComponent;
  let fixture: ComponentFixture<AddPmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
