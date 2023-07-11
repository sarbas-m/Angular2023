import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import{LabTechnicianService}from'src/app/shared/lab-technician.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-test-report',
  templateUrl: './view-test-report.component.html',
  styleUrls: ['./view-test-report.component.scss']
})
export class ViewTestReportComponent implements OnInit {
  appointmentId:number

  constructor(private route:ActivatedRoute,public labTechnicianServices:LabTechnicianService,private router:Router) { }

  ngOnInit(): void {
    this.appointmentId=this.route.snapshot.params['appointmentId']
    this.labTechnicianServices.BindListPatientReport(this.appointmentId)
  }

  Bill(appointmentId:number){
    console.log(appointmentId)
    this.router.navigate(['app-view-test-bill',appointmentId])
  }

}
