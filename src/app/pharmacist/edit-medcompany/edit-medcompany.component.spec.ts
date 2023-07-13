import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedcompanyComponent } from './edit-medcompany.component';

describe('EditMedcompanyComponent', () => {
  let component: EditMedcompanyComponent;
  let fixture: ComponentFixture<EditMedcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
