import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiagnosComponent } from './add-diagnos.component';

describe('AddDiagnosComponent', () => {
  let component: AddDiagnosComponent;
  let fixture: ComponentFixture<AddDiagnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiagnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiagnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
