import { Component, OnInit } from '@angular/core';
import {ReceptionistService} from 'src/app/shared/receptionist.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-radd-patient',
  templateUrl: './radd-patient.component.html',
  styleUrls: ['./radd-patient.component.scss']
})
export class RaddPatientComponent implements OnInit {

  constructor(public receptionistService:ReceptionistService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){   // for add and update same form
    let addId=this.receptionistService.formData.patientId;
   if(addId==0 || addId==null){
    console.log(form.value);
    this.InsertRecord(form);
   }else{
    
    this.updateRecord(form);
   }
  }

  resetForm(form: NgForm) {
    //throw new Error('Method not implemented.');
    if(form!=null){
      form.resetForm();
    }
  }

  InsertRecord(form:NgForm){
    console.log("inserting..")
    this.receptionistService.insertPatient(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        //alert("Successfully added");
        this.toastr.success('Patient Successfully Added');
        
        this.router.navigate(['rpatient-list']);
        
      }
    )

  }

  updateRecord(form:NgForm){
    console.log("updating..")
    this.receptionistService.updatePatient(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        //alert("Successfully updated");
        this.toastr.success("Patient Updated Successfully");
        this.router.navigate(['rpatient-list']);
      }
    )
  }

}
