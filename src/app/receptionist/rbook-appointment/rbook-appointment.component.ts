import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/shared/receptionist.service';


@Component({
  selector: 'app-rbook-appointment',
  templateUrl: './rbook-appointment.component.html',
  styleUrls: ['./rbook-appointment.component.scss']
})
export class RbookAppointmentComponent implements OnInit {
 
  patientId:number;
  constructor(public  receptionistService:ReceptionistService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.receptionistService.BindDepartmentListForRec(); //for departments
    this.receptionistService.BindDoctorListForRec(); //for doctors
    this.patientId=this.route.snapshot.params['patientId'];

  }

  onSubmit(form:NgForm){

    console.log(form.value);
    this.insertRecordAppointment(form);

  }

  resetForm(form: NgForm) {
    
    if(form!=null){
      form.resetForm();
    }
  }

  insertRecordAppointment(form:NgForm){
     
    console.log("inserting appointments...");
    form.value.patientId=this.patientId;
    this.receptionistService.insertAppointment(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        alert("Appointment Successfully added");
        this.router.navigate(['app-rlist-appointment']);
        


      }
    )
  }

  getCurrentDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padNumber(now.getMonth() + 1);
    const day = this.padNumber(now.getDate());
    const hours = this.padNumber(now.getHours());
    const minutes = this.padNumber(now.getMinutes());
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  
  getMaxDateTime(): string {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
  
    const year = now.getFullYear();
    const month = this.padNumber(now.getMonth() + 1);
    const day = this.padNumber(now.getDate());
    const hours = this.padNumber(now.getHours());
    const minutes = this.padNumber(now.getMinutes());
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  
  padNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }

}
