import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPmedicineComponent } from './list-pmedicine.component';

describe('ListPmedicineComponent', () => {
  let component: ListPmedicineComponent;
  let fixture: ComponentFixture<ListPmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
