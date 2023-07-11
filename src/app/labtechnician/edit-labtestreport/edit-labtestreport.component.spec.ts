import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabtestreportComponent } from './edit-labtestreport.component';

describe('EditLabtestreportComponent', () => {
  let component: EditLabtestreportComponent;
  let fixture: ComponentFixture<EditLabtestreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLabtestreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabtestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
