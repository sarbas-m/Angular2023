import { Component, OnInit } from '@angular/core';
import{LabTechnicianService} from 'src/app/shared/lab-technician.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{NgForm} from '@angular/forms';



@Component({
  selector: 'app-add-test-result',
  templateUrl: './add-test-result.component.html',
  styleUrls: ['./add-test-result.component.scss']
})
export class AddTestResultComponent implements OnInit {


  testId:number
  testPrescriptionId:number;


  constructor(public labTechnicianService: LabTechnicianService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.testPrescriptionId=this.route.snapshot.params['testPrescriptionId'];
    this.testId=this.route.snapshot.params['testId']
    this.labTechnicianService.BindListTestForId(this.testId)
  }

  onSubmit(form:NgForm){
    console.log("report add")
    let testReportId=this.labTechnicianService.formDataReport.testReportId;
    if(testReportId==0 || testReportId==null){
      console.log(form.value);
      this.InsertRecord(form);
      this.router.navigate(['app-list-test-prescription'])
    }

    else{
      this.updateRecord(form);
    }

  }

//Insert

InsertRecord(form:NgForm)
{
  console.log("Inserting");
  form.value.testPrescriptionId=this.testPrescriptionId
  this.labTechnicianService.insertTestReport(form.value).subscribe(
    (result)=>{
      console.log(result);
      
     // this.resetForm(form);
    //  this.toastr.success("Added Successfully");
      this.router.navigate(['app-list-labtestprescription']);
     
      alert("Successfully added");
    })
  
}
updateRecord(form:NgForm){
  console.log("updating");
  form.value.testPrescriptionId=this.testPrescriptionId
  this.labTechnicianService.UpdateTestResult(form.value).subscribe(
    (result=>{
      console.log(result);
      this.resetForm(form);
      alert ("Successfully Updated")
      this.router.navigate(['app-list-labtestprescription']);

    })
  )
}


  //Reset Form
  resetForm(form:NgForm){
    if(form!=null)
    {
      form.resetForm();
    }
  }
}
