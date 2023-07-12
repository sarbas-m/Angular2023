import { Component, OnInit } from '@angular/core';
import {PharmacistService} from 'src/app/shared/pharmacist.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-viewpress',
  templateUrl: './list-viewpress.component.html',
  styleUrls: ['./list-viewpress.component.scss']
})
export class ListViewpressComponent implements OnInit {

  page:number=1;
  filter:number;
  constructor(public presService:PharmacistService,private router:Router) { }

  ngOnInit(): void {
    this.presService.BindListPress()
  }
  Onclick(){

  }
  ViewBill(appointmentId:number){
    this.router.navigate(['app-bill-medicine',appointmentId])
  }

}
