import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestResultComponent } from './edit-test-result.component';

describe('EditTestResultComponent', () => {
  let component: EditTestResultComponent;
  let fixture: ComponentFixture<EditTestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
