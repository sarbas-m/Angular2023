import { Component, OnInit } from '@angular/core';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';
import { Ltestreport } from 'src/app/shared/ltestreport';

@Component({
  selector: 'app-add-labtestreport',
  templateUrl: './add-labtestreport.component.html',
})
export class AddLabtestreportComponent implements OnInit {
  testReport: Ltestreport = new Ltestreport();

  constructor(private labTechnicianService: LabTechnicianService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.labTechnicianService.insertTestReport(this.testReport).subscribe(() => {
      // Reset the form after successful submission
      this.testReport = new Ltestreport();
    });
  }
}
