import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-doctor-medicine',
  templateUrl: './add-doctor-medicine.component.html',
  styleUrls: ['./add-doctor-medicine.component.scss']
})
export class AddDoctorMedicineComponent implements OnInit {
  appointmentId: number;
  userId:number
  constructor(private router: ActivatedRoute, private route: Router, public doctorServices: DoctorService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.appointmentId = this.router.snapshot.params['appointmentId'] 
    this.userId=this.router.snapshot.params['userId']
    this.doctorServices.BindListMedicine()
    this.doctorServices.BindListTodaysMedicineHistory(this.appointmentId,this.userId)
  }

  onSubmit(form: NgForm) {

    this.InserMedRecord(form);
  }
  InserMedRecord(form: NgForm) {
    console.log("insreting med");
    form.value.appointmentId = this.appointmentId;
    this.doctorServices.insertMedicine(form.value).subscribe(
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
  deleteMedicine(medicinePrescriptionId:number,appointmentId:number,userId:number){
    this.doctorServices.deleteTodayMedicine(medicinePrescriptionId).subscribe(
      response=>{
        this.doctorServices.BindListTodaysMedicineHistory(appointmentId,userId)
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
