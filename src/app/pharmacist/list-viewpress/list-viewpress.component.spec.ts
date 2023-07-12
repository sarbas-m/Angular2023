import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewpressComponent } from './list-viewpress.component';

describe('ListViewpressComponent', () => {
  let component: ListViewpressComponent;
  let fixture: ComponentFixture<ListViewpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
