import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-doctor-note',
  templateUrl: './add-doctor-note.component.html',
  styleUrls: ['./add-doctor-note.component.scss']
})
export class AddDoctorNoteComponent implements OnInit {
  appointmentId: number;
  userId:number
  constructor(private router: ActivatedRoute, private route: Router, public doctorServices: DoctorService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.appointmentId = this.router.snapshot.params['appointmentId'] 
    this.userId=this.router.snapshot.params['userId']
    this.doctorServices.BindListTodaysDoctorNoteHistory(this.appointmentId,this.userId)
  }

    onSubmit(form:NgForm){
 
    this.InsertNoteRecord(form);

  
}
InsertNoteRecord(form: NgForm) {
  console.log("insreting note");
  form.value.appointmentId = this.appointmentId;
  this.doctorServices.insertDoctorNote(form.value).subscribe(
    (result) => {
      console.log(result)
      this.toastr.success('Added Succesfully');
      //this.route.navigate(['emp-list'])
      setTimeout(() => {
        location.reload(); // Refresh the page after a delay
      }, 500);  
    }
  )
}
deleteNote(doctorNoteId:number,appointmentId:number,userId:number){
  this.doctorServices.deleteTodayNote(doctorNoteId).subscribe(
    response=>{
      this.doctorServices.BindListTodaysDoctorNoteHistory(appointmentId,userId)
      this.toastr.success('Deleted Succesfully');
      setTimeout(() => {
        location.reload(); // Refresh the page after a delay
      }, 500); 
    },err=>{
      console.log(err)
    }
  ) 
}

}
