import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {


  userId:number;
  


  constructor(private authService: AuthService,private route:ActivatedRoute,private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId']
    
  }

  appointmentList(){
    
    console.log(this.userId)
    this.router.navigate(['app-list-doctor-appointment',this.userId]);
  }
  appointmentListDisable(){
    this.router.navigate(['app-list-disable-appointment',this.userId])
  }
  
  logout(){
    localStorage.removeItem('USERNAME')
    localStorage.removeItem('ACCESS_ROLE')

    this.router.navigate(['login']);

  }


}
