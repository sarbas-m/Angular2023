import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import{LabTechnicianService}from'src/app/shared/lab-technician.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-test-bill',
  templateUrl: './view-test-bill.component.html',
  styleUrls: ['./view-test-bill.component.scss']
})
export class ViewTestBillComponent implements OnInit {
  appointmentId:number

  constructor(private route:ActivatedRoute,public labTechnicianServices:LabTechnicianService,private router:Router) { }

  ngOnInit(): void {
    this.appointmentId=this.route.snapshot.params['appointmentId']
    this.labTechnicianServices.BindListTestBill(this.appointmentId)
  }
  DisablePrescription(){
    console.log(this.appointmentId)
    this.labTechnicianServices.disableTestPrescription(this.appointmentId)
    this.router.navigate(['app-labtechnician'])
  }
}
