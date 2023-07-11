import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabTestComponent } from './list-lab-test.component';

describe('ListLabTestComponent', () => {
  let component: ListLabTestComponent;
  let fixture: ComponentFixture<ListLabTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
