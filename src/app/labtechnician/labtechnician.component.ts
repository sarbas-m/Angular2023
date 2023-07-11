import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labtechnician',
  templateUrl: './labtechnician.component.html',
  styleUrls: ['./labtechnician.component.scss']
})
export class LabtechnicianComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

testList(){
  this.router.navigate(['app-list-lab-test'])
}
prescription(){
  this .router.navigate(['app-list-labtestprescription'])
}
viewreport(){
  this .router.navigate(['app-list-labtestreport'])

}
logout(){
  localStorage.removeItem('USERNAME')
  localStorage.removeItem('ACCESS_ROLE')

  this.router.navigate(['login']);

}
}