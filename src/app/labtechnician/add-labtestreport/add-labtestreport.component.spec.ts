import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddLabtestreportComponent } from './add-labtestreport.component';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';

describe('AddLabtestreportComponent', () => {
  let component: AddLabtestreportComponent;
  let fixture: ComponentFixture<AddLabtestreportComponent>;
  let labTechnicianService: LabTechnicianService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLabtestreportComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [LabTechnicianService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabtestreportComponent);
    component = fixture.componentInstance;
    labTechnicianService = TestBed.inject(LabTechnicianService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
