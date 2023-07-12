import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedcompanyComponent } from './list-medcompany.component';

describe('ListMedcompanyComponent', () => {
  let component: ListMedcompanyComponent;
  let fixture: ComponentFixture<ListMedcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
