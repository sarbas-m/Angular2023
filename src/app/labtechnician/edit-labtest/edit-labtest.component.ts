import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';
import { Ltest } from 'src/app/shared/ltest';

@Component({
  selector: 'app-edit-labtest',
  templateUrl: './edit-labtest.component.html',
  styleUrls: ['./edit-labtest.component.scss']
})
export class EditLabtestComponent implements OnInit {

  //declare variables
  testId : number;
  ltest:Ltest=new Ltest();

  constructor(private route:ActivatedRoute,public labTechnicianServices:LabTechnicianService) { }

  ngOnInit(): void {
 
     //getting the id passed from the browser Url
     this.testId=this.route.snapshot.params['testId'];
     console.log(this.testId)
     console.log("sfsdf")
     this .labTechnicianServices.getTest(this.testId)
     .subscribe(data=>{
       console.log(data)
       this.ltest=data;
       
       this.labTechnicianServices.formData=Object.assign({},data);
       console.log("Value of formData:", this.labTechnicianServices.formData);
       console.log(this.ltest)
     
     },error=>console.log(error));
   }
 

  }


