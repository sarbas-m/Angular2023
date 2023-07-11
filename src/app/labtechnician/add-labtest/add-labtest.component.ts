import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabTechnicianService } from 'src/app/shared/lab-technician.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-labtest',
  templateUrl: './add-labtest.component.html',
  styleUrls: ['./add-labtest.component.scss']
})
export class AddLabtestComponent implements OnInit {

  constructor(private router: Router, public labTechnicianServices: LabTechnicianService,private toastr:ToastrService) { }

  ngOnInit(): void {


  }
  onSubmit(form: NgForm) {

    let testId = this.labTechnicianServices.formData.testId;
    if (testId == 0 || testId == null) {
      console.log(form.value)
      this.InsertRecord(form)
    } else {
      this.updateRecord(form)
    }

  }

  //Insert
  InsertRecord(form: NgForm) {
    console.log("Inserting");
    this.labTechnicianServices.insertTest(form.value).subscribe(
      (result) => {
        console.log(result);
        //this.resetForm(form);
        this.toastr.success("Test Added Successfully");
        this.router.navigate(['app-list-lab-test']);
       // alert("Successfully added")

      })
  }

  updateRecord(form: NgForm) {
    console.log("updating");
    this.labTechnicianServices.UpdateTest(form.value).subscribe(
      (result => {
        console.log(result);
        this.resetForm(form);
        //alert("Successfully Updated")
        this.toastr.success("Test Updated Successfully");
        this.router.navigate(['app-list-lab-test']);

      })
    )
  }
  resetForm(form:NgForm){
    if(form!=null)
    {
      form.resetForm();
    }
  }

}


