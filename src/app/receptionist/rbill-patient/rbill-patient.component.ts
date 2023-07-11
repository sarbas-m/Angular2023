import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/shared/receptionist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rbill-patient',
  templateUrl: './rbill-patient.component.html',
  styleUrls: ['./rbill-patient.component.scss']
})
export class RbillPatientComponent implements OnInit {

  patientId:number;

  constructor(public  receptionistService:ReceptionistService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.patientId=this.route.snapshot.params['patientId'];
    console.log(this.patientId);

    this.receptionistService.BindBillList(this.patientId);
    console.log("succed..");


  }

  ToHome(){
    alert("Printing Bill...");
    this.router.navigate(['app-receptionist']);
  }

}
