import { Component, OnInit } from '@angular/core';
import {ReceptionistService} from 'src/app/shared/receptionist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rlist-patient',
  templateUrl: './rlist-patient.component.html',
  styleUrls: ['./rlist-patient.component.scss']
})
export class RlistPatientComponent implements OnInit {

  page:number=1; // variable for paging
  filter:number;  //variable created for serach filter

  constructor(public  receptionistService:ReceptionistService, private router:Router) { }

  ngOnInit(): void {
    this.receptionistService.BindListPatientsForRec();
  }

  updatePatient(patientId:number){
    console.log(patientId);
    this.router.navigate(['app-redit-patient',patientId]);
  }

  forPatientId(patientId:number){
    console.log(patientId);
    this.router.navigate(['app-rbook-appointment',patientId]);
  }

  DeletePatient(patientId:number){
    if(confirm('Are you sure to delete this record?')){
      this.receptionistService.deletePatient(patientId)
      .subscribe(response=>{
        this.receptionistService.BindListPatientsForRec();
        alert("Deleted Successfully");
      },
      err=>{
        console.log(err)
      });

      
    }
    


  }

  ToHome(){
    this.router.navigate(['app-receptionist']);
  }

}
