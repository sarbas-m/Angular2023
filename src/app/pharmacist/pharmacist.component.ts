import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.scss']
})
export class PharmacistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Onclick(){

  }
  MedList(){
    this.router.navigate(['app-list-pmedicine'])
  }

  CompanyList(){
    this.router.navigate(['app-list-medcompany'])
  }

  Medprescription(){
    this.router.navigate(['app-list-prescription'])
  }
  logout(){
    localStorage.removeItem('USERNAME')
    localStorage.removeItem('ACCESS_ROLE')
    this.router.navigate(['login'])
  }
  medicineReorder(){
    console.log("sadsada")
    this.router.navigate(['app-list-medicine-reorder'])
  }

}
