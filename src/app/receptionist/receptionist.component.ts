import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  WayToPatientForm(){

    this.router.navigate(['app-radd-patient']);

  }

  WayToPatientList(){

    this.router.navigate(['app-rlist-patient']);

  }

  WayToAppointmentList(){

    this.router.navigate(['app-rlist-appointment']);
  }

  logout(){
    localStorage.removeItem('USERNAME')
    localStorage.removeItem('ACCESS_ROLE')

    this.router.navigate(['login']);

  }


}
