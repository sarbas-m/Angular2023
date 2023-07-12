import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedcompanyComponent } from './add-medcompany.component';

describe('AddMedcompanyComponent', () => {
  let component: AddMedcompanyComponent;
  let fixture: ComponentFixture<AddMedcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
