import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-diagnos',
  templateUrl: './add-diagnos.component.html',
  styleUrls: ['./add-diagnos.component.scss']
})
export class AddDiagnosComponent implements OnInit {

  appointmentId: number;
  userId:number
  constructor(private router: ActivatedRoute, private route: Router, public doctorServices: DoctorService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.appointmentId = this.router.snapshot.params['appointmentId'] 
    this.userId=this.router.snapshot.params['userId']
    this.doctorServices.BindListTodaysDiagnosHistory(this.appointmentId,this.userId)


  }
  onSubmit(form:NgForm){
 
      this.InsertDiagnosRecord(form);
    
  }
  InsertDiagnosRecord(form: NgForm) {
    console.log("insreting diagnos");
    form.value.appointmentId = this.appointmentId;
    this.doctorServices.insertDoctorDiagnos(form.value).subscribe(
      (result) => {
        console.log(result)
        //alert("Successfully added")
        this.toastr.success('Added Succesfully');
        setTimeout(() => {
          location.reload(); // Refresh the page after a delay
        }, 500);  
        //this.toastr.success('Added Succesfully');
       // this.route.navigate(['emp-list'])
      }
    )
  }
  deleteDiagnos(diagnosId:number,appointmentId:number,userId:number){
      this.doctorServices.deleteTodayDiagnos(diagnosId).subscribe(
        response=>{
          this.doctorServices.BindListTodaysDiagnosHistory(appointmentId,userId)
          this.toastr.success('Deleted Succesfully');
          setTimeout(() => {
            location.reload(); // Refresh the page after a delay
          }, 500); 
        },err=>{
          console.log(err)
        }
      ) 
  }

  /*onSubmit(form:NgForm){
 
    this.InsertNoteRecord(form);

  
}
  InsertNoteRecord(form: NgForm) {
    console.log("insreting note");
    form.value.appointmentId = this.appointmentId;
    this.doctorServices.insertDoctorNote(form.value).subscribe(
      (result) => {
        console.log(result)
        alert("Successfully added")
        //this.toastr.success('Added Succesfully');
        this.route.navigate(['emp-list'])
      }
    )
  }*/
  /*onSubmit(form: NgForm) {

    this.InserMedRecord(form);
  }
  InserMedRecord(form: NgForm) {
    console.log("insreting med");
    form.value.appointmentId = this.appointmentId;
    this.doctorServices.insertMedicine(form.value).subscribe(
      (result) => {
        console.log(result)
        alert("Successfully added")
        //this.toastr.success('Added Succesfully');
        this.route.navigate(['emp-list'])
      }
    )
  }
  onSubmit(form: NgForm) {

    this.InsertTestRecord(form);
  }
  InsertTestRecord(form: NgForm) {
    console.log("insreting test");
    form.value.appointmentId = this.appointmentId;
    this.doctorServices.insertTest(form.value).subscribe(
      (result) => {
        console.log(result)
        alert("Successfully added")
        //this.toastr.success('Added Succesfully');
        this.route.navigate(['emp-list'])
      }
    )
  }

  disableAppointment(){
    this.doctorServices.disableAppointment(this.appointmentId).subscribe(
      response=>{
        alert("Consultation Completed")
      }
    )
    this.route.navigate(['app-list-doctor-appointment',this.userId]);
  }
*/


}
