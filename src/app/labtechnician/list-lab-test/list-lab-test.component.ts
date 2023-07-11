import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import{LabTechnicianService}from'src/app/shared/lab-technician.service'
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-list-lab-test',
  templateUrl: './list-lab-test.component.html',
  styleUrls: ['./list-lab-test.component.scss']
})
export class ListLabTestComponent implements OnInit {
  page:number=1;
  filter:number;
  constructor(private router:Router,public labTechnicianServices:LabTechnicianService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.labTechnicianServices.BindListTest()
  }
   
  //Update Test---passing the testId through Url
  updateTest(testId:number){
    console.log(testId);
    this.router.navigate(['app-edit-labtest',testId]);
    this.toastr.success("Test Added Successfully");
  }
  DeleteTest(testId:number){
    if(confirm('Are you sure to Delete this record?')){
      this.labTechnicianServices.deleteTest(testId)
      .subscribe(response=>{
        this.labTechnicianServices.BindListTest();
        //alert("Deleted Successfully");
        this.toastr.success("Deleted Successfully");
      },
      err=>{
        console.log(err)
      
      });
    }

  }
  home(){
    this.router.navigate(['app-labtechnician'])
  }

}
