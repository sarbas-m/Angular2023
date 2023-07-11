import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{LabTechnicianService}from'src/app/shared/lab-technician.service';

@Component({
  selector: 'app-list-labtestprescription',
  templateUrl: './list-labtestprescription.component.html',
  styleUrls: ['./list-labtestprescription.component.scss']
})
export class ListLabtestprescriptionComponent implements OnInit {
  page:number=1;
  filter:number;
   
 constructor(private router:Router,public labTechnicianServices:LabTechnicianService) { }

  ngOnInit(): void {
    this.labTechnicianServices.BindListPres()
  }
  AddTestResult(testPrescriptionId:number,testId:number){
    this.router.navigate(['app-add-test-result',testPrescriptionId,testId])
  }
  updateTestResult(testPrescriptionId:number,testId:number){
    this.router.navigate(['app-edit-test-result',testPrescriptionId,testId])
  }
  
  home(){
    this.router.navigate(['app-labtechnician'])
  }
}

