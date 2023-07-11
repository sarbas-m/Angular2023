import { Component, OnInit } from '@angular/core';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';
import { Ltestreport } from 'src/app/shared/ltestreport';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-labtestreport',
  templateUrl: './list-labtestreport.component.html',
  styleUrls: ['./list-labtestreport.component.scss']

})
export class ListLabtestreportComponent implements OnInit {
  reports: Ltestreport[];
  selectedReport: Ltestreport;
  filter:number;
  page:number=1;

  constructor(private labTechnicianService: LabTechnicianService,private router:Router) { }

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.labTechnicianService.getTestReports().subscribe(reports => {
      this.reports = reports;
    });
  }

  showReport(appointmentId:number,testPrescriptionId:number): void {
    this.router.navigate(['app-view-test-report',appointmentId,testPrescriptionId])
  }

  home(){
    this.router.navigate(['app-labtechnician'])
  }
}
