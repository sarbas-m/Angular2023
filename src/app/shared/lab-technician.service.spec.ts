import { TestBed } from '@angular/core/testing';

import { LabTechnicianService } from './lab-technician.service';

describe('LabTechnicianService', () => {
  let service: LabTechnicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabTechnicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
