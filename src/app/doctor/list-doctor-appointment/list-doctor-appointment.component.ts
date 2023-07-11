import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DoctorService} from'src/app/shared/doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-doctor-appointment',
  templateUrl: './list-doctor-appointment.component.html',
  styleUrls: ['./list-doctor-appointment.component.scss']
})
export class ListDoctorAppointmentComponent implements OnInit {
  currentDate: Date = new Date();
  page:number=1;
  filter:number;

  userId:number;
  constructor(private router:ActivatedRoute,public doctorServices:DoctorService,private route:Router) { }

  ngOnInit(): void {

    this.userId=this.router.snapshot.params['userId']
    this.doctorServices.BindListAppointment(this.userId)

  }
  consultPatient(tokenNo:number){
    console.log(tokenNo)
    this.route.navigate(['app-list-doctor-patient',this.userId,tokenNo]);
  }
  home(){
    this.route.navigate(['app-doctor',this.userId]);
  }


}
