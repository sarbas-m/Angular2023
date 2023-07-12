import { Component, OnInit } from '@angular/core';
import {PharmacistService} from 'src/app/shared/pharmacist.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.scss']
})
export class ListPrescriptionComponent implements OnInit {

  page:number=1;
  filter:number;
  constructor(public presService:PharmacistService,private router:Router) { }

  ngOnInit(): void {
    this.presService.BindListPress()
  }

  Onclick(){

  }
  ViewPres(){
    this.router.navigate(['app-list-viewpress'])
  }
  home(){

    this.router.navigate(['app-pharmacist'])
  }
}
