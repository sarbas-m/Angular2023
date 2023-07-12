import { Component, OnInit } from '@angular/core';
import {PharmacistService} from 'src/app/shared/pharmacist.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-medicine-reorder',
  templateUrl: './list-medicine-reorder.component.html',
  styleUrls: ['./list-medicine-reorder.component.scss']
})
export class ListMedicineReorderComponent implements OnInit {
  page:number=1;
  filter:number;
  constructor(public orderService:PharmacistService,private router:Router) { }

  ngOnInit(): void {
    this.orderService.BindListOrder();
  }
  home(){

    this.router.navigate(['app-pharmacist'])
  }

  toReorder(){
        this.router.navigate(['app-add-medicine-reorder'])
  }
}
