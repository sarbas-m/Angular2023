import { Component, OnInit } from '@angular/core';
import {PharmacistService} from 'src/app/shared/pharmacist.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-medcompany',
  templateUrl: './list-medcompany.component.html',
  styleUrls: ['./list-medcompany.component.scss']
})
export class ListMedcompanyComponent implements OnInit {
  page:number=1;
  filter:number;
  constructor(public cmpService:PharmacistService,private router:Router) { }

  ngOnInit(): void {
    this.cmpService.BindListCompany();
  }
   //Update Employee -- passing the id through url

   updateCompany(companyId:number){
    console.log(companyId);
    this.router.navigate(['app-edit-medcompany',companyId]);
  }

  deleteCompany(companyId: number) {
    console.log(companyId)
    this.cmpService.deleteCompany(companyId).subscribe(
      response => {
        console.log("deleted successfully.");
        // Update the employee list after deletion
        alert("deleted succesfully")
        this.cmpService.BindListCompany();
      },
      error => {
        console.error("Error deleting company:", error);
      }
    );


}
home(){

  this.router.navigate(['app-pharmacist'])
}
}
