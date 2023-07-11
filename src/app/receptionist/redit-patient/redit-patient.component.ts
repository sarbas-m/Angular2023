import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ReceptionistService} from 'src/app/shared/receptionist.service';
import {Rpatient} from 'src/app/shared/rpatient';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-redit-patient',
  templateUrl: './redit-patient.component.html',
  styleUrls: ['./redit-patient.component.scss']
})
export class ReditPatientComponent implements OnInit {
  
  patientId:number;
  patients:Rpatient= new Rpatient();

  constructor(private receptionistService:ReceptionistService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    //getting patientId
    this.patientId=this.route.snapshot.params['patientId'];

    this.receptionistService.getThePatient(this.patientId)
    .subscribe(data=>{
      console.log(data);
      this.patients=data;

      //date format change
      var datePipe=new DatePipe("en-UK");
      let formatedyear:any=datePipe.transform(data.patientCreatedOn,'yyyy-MM-dd');
      data.patientCreatedOn=formatedyear;
      this.receptionistService.formData=Object.assign({},data);
    },error=>console.log(error));
   }

  
  

}
