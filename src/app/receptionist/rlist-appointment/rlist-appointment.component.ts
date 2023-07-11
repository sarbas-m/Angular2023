import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/shared/receptionist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rlist-appointment',
  templateUrl: './rlist-appointment.component.html',
  styleUrls: ['./rlist-appointment.component.scss']
})
export class RlistAppointmentComponent implements OnInit {

  page:number=1; // variable for paging
  filter:number;  //variable created for serach filter

  constructor(public  receptionistService:ReceptionistService, private router:Router) { }

  ngOnInit(): void {
    
    this.receptionistService. BindAppointmentListForRec();

  }

  DeleteAppointment(appointmentId:number){

    if(confirm('Are you sure to delete this record?')){
      this.receptionistService.deleteAppointment(appointmentId)
      .subscribe(response=>{
        this.receptionistService.BindAppointmentListForRec();
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

  BillGenerate(patientId:number){

    this.router.navigate(['app-rbill-patient',patientId]);


  }

}
