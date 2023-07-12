import { Component, OnInit } from '@angular/core';
import {PharmacistService} from 'src/app/shared/pharmacist.service';
import{Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-medicine',
  templateUrl: './bill-medicine.component.html',
  styleUrls: ['./bill-medicine.component.scss']
})
export class BillMedicineComponent implements OnInit {

  page:number=1;
  filter:number;
  appointmentId:number
  constructor(public billService:PharmacistService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentId=this.route.snapshot.params['appointmentId']
    this.billService.BindMedicineBill(this.appointmentId)
  }

  DisablePrescription(){

    this.billService.DisablePrescription(this.appointmentId)

    this.router.navigate(['app-pharmacist'])
  }
  


}
