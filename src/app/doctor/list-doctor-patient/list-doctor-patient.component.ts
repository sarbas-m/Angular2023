import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DoctorService} from'src/app/shared/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-doctor-patient',
  templateUrl: './list-doctor-patient.component.html',
  styleUrls: ['./list-doctor-patient.component.scss']
})
export class ListDoctorPatientComponent implements OnInit {
  userId:number;
  tokenNo:number;
  patientId:number
  appointmentId:number
  page:number=1;
  filter:number;
  constructor(private router:ActivatedRoute,public doctorServices:DoctorService,private route:Router) { }

  ngOnInit(): void {
    this.userId=this.router.snapshot.params['userId']
    this.tokenNo=this.router.snapshot.params['tokenNo']
    this.doctorServices.BindListPatient(this.tokenNo)

  }
  patientHistory(patientId:number,appointmentId:number){
   
    this.route.navigate(['app-list-doctor-patienthistory',this.userId,this.tokenNo,patientId,appointmentId]);

  }

}
