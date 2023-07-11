import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabtestprescriptionComponent } from './list-labtestprescription.component';

describe('ListLabtestprescriptionComponent', () => {
  let component: ListLabtestprescriptionComponent;
  let fixture: ComponentFixture<ListLabtestprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLabtestprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLabtestprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
