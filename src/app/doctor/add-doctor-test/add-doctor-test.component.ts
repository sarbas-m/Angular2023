import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-doctor-test',
  templateUrl: './add-doctor-test.component.html',
  styleUrls: ['./add-doctor-test.component.scss']
})
export class AddDoctorTestComponent implements OnInit {
  appointmentId: number;
  userId:number
  constructor(private router: ActivatedRoute, private route: Router, public doctorServices: DoctorService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.appointmentId = this.router.snapshot.params['appointmentId'] 
    this.userId=this.router.snapshot.params['userId']
    
    this.doctorServices.BindListTest()
    this.doctorServices.BindListTodaysTestHistory(this.appointmentId,this.userId)
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
        this.toastr.success('Added Succesfully');
        //this.route.navigate(['emp-list'])
        setTimeout(() => {
          location.reload(); // Refresh the page after a delay
        }, 500);  
      }
      
    )
  }
  deleteTest(testPrescriptionId:number,appointmentId:number,userId:number){
    this.doctorServices.deleteTodayTest(testPrescriptionId).subscribe(
      response=>{
        this.doctorServices.BindListTodaysTestHistory(appointmentId,userId)
        this.toastr.success('Deleted Succesfully');
        setTimeout(() => {
          location.reload(); // Refresh the page after a delay
        }, 500); 
      },err=>{
        console.log(err)
      }
    ) 
}
  disableAppointment(){
    console.log("disable")
    this.doctorServices.disableAppointment(this.appointmentId,this.userId).subscribe(
      response=>{
        this.toastr.success('Consultation Completed');      }
    )
    this.route.navigate(['app-list-doctor-appointment',this.userId]);

  }

}
