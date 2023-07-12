import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacistService } from 'src/app/shared/pharmacist.service';


@Component({
  selector: 'app-add-medicine-reorder',
  templateUrl: './add-medicine-reorder.component.html',
  styleUrls: ['./add-medicine-reorder.component.scss']
})
export class AddMedicineReorderComponent implements OnInit {

  constructor(public pharmaService: PharmacistService, private router: Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    window.onpopstate = () => {
      location.reload();
    };
    this.pharmaService.BindListOrder();
    this.pharmaService.BindListMedicine();
    this.pharmaService.BindListCompany();
  }

  onSubmit(form: NgForm) {
    console.log("inserting")
    let addId = this.pharmaService.formReOrder.orderId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    } 
  }

  InsertRecord(form: NgForm) {
    console.log("Inserting");
    this.pharmaService.insertMedicineReorder(form.value).subscribe(
      (result) => {
        console.log(result);
        this.toastrService.success("Added");
        this.router.navigate(['app-list-medicine-reorder']);
      }
    );

}
}
