import { Component, OnInit } from '@angular/core';
import {PharmacistService} from 'src/app/shared/pharmacist.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-list-pmedicine',
  templateUrl: './list-pmedicine.component.html',
  styleUrls: ['./list-pmedicine.component.scss']
})
export class ListPmedicineComponent implements OnInit {
  page:number=1;
  filter:number;
  constructor(public medService:PharmacistService,private router:Router) { }

  ngOnInit(): void {
    this.medService.BindListMedicine();
  }
   //Update Employee -- passing the id through url

   updateMedicine(medicineId:number){
    console.log(medicineId);
    this.router.navigate(['app-edit-medicine',medicineId]);
  }

  deleteMedicine(medicineId: number) {
    console.log(medicineId)
    this.medService.deleteMedicine(medicineId).subscribe(
      response => {
        console.log("deleted successfully.");
        // Update the employee list after deletion
        alert("deleted succesfully")
        this.medService.BindListMedicine();
      },
      error => {
        console.error("Error deleting employee:", error);
      }
    );

  
}
home(){

  this.router.navigate(['app-pharmacist'])
}
}
