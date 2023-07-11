import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';
import { Ltestreport } from 'src/app/shared/ltestreport';


@Component({
  selector: 'app-edit-labtestreport',
  templateUrl: './edit-labtestreport.component.html',
  styleUrls: ['./edit-labtestreport.component.scss']
})
export class EditLabtestreportComponent implements OnInit {

  //declare variables
  testPrescriptionId : number;
  Ltestreport=new Ltestreport();

  constructor(private route:ActivatedRoute,public labTechnicianServices:LabTechnicianService) { }

  ngOnInit(): void {

    //getting the id passed from the browser Url

    this.testPrescriptionId=this.route.snapshot.params['testPrescriptionId'];
    this .labTechnicianServices.getTestReportById(this.testPrescriptionId)
    .subscribe(data=>{
      console.log(data)
      this.Ltestreport=data;
      console.log(data)

      this.labTechnicianServices.formDataReport=Object.assign({},data);
    },error=>console.log(error));
  }

  
}



 



  
