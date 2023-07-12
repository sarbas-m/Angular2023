import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacistService } from 'src/app/shared/pharmacist.service';
import { Pmedicine } from 'src/app/shared/pmedicine';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss']
})
export class EditMedicineComponent implements OnInit {

  medicineId:number;
  medicines:Pmedicine=new Pmedicine();

  constructor(public medService:PharmacistService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.medicineId=this.route.snapshot.params['medicineId'];

    this.medService.getMedicine(this.medicineId)
    .subscribe(data=>{
      console.log(data);
      this.medicines=data;
      this.medService.formData=Object.assign({},data);
    },error=>console.log(error));


  }

}
