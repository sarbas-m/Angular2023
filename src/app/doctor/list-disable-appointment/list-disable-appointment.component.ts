import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DoctorService} from'src/app/shared/doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-disable-appointment',
  templateUrl: './list-disable-appointment.component.html',
  styleUrls: ['./list-disable-appointment.component.scss']
})
export class ListDisableAppointmentComponent implements OnInit {

  page:number=1;
  filter:number;

  userId:number;
  constructor(private router:ActivatedRoute,public doctorServices:DoctorService,private route:Router) { }

  ngOnInit(): void {

    this.userId=this.router.snapshot.params['userId']
    this.doctorServices.BindListDisableAppointment(this.userId)

  }
  consultPatient(tokenNo:number){
    console.log(tokenNo)
    this.route.navigate(['app-list-doctor-patient',this.userId,tokenNo]);
  }
  home(){
    this.route.navigate(['app-doctor',this.userId]);
  }

}
