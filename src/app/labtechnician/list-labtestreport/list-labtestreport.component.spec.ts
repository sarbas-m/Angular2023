import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListLabtestreportComponent } from './list-labtestreport.component';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';
import { of } from 'rxjs';


describe('ListLabtestreportComponent', () => {
  let component: ListLabtestreportComponent;
  let fixture: ComponentFixture<ListLabtestreportComponent>;
  let mockLabTechnicianService: any;

  beforeEach(async () => {
    mockLabTechnicianService = jasmine.createSpyObj(['getTestReport']);

    await TestBed.configureTestingModule({
      declarations: [ ListLabtestreportComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: LabTechnicianService, useValue: mockLabTechnicianService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLabtestreportComponent);
    component = fixture.componentInstance;
    mockLabTechnicianService.getTestReport.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // add additional tests as needed
});
