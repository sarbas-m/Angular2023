import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacistService } from 'src/app/shared/pharmacist.service';

@Component({
  selector: 'app-add-pmedicine',
  templateUrl: './add-pmedicine.component.html',
  styleUrls: ['./add-pmedicine.component.scss']
})
export class AddPmedicineComponent implements OnInit {
 

  constructor(public pharmaService: PharmacistService, private router: Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    window.onpopstate = () => {
      location.reload();
    };
    this.pharmaService.BindListCompany();
    
  }

  onSubmit(form: NgForm) {
    let addId = this.pharmaService.formData.medicineId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  InsertRecord(from: NgForm) {
    console.log("Inserting");
    this.pharmaService.insertMedicine(from.value).subscribe(
      (result) => {
        console.log(result);
        this.toastrService.success("Added");
        this.router.navigate(['app-list-pmedicine']);
      }
    );
    }

    updateRecord(form: NgForm) {
      console.log("Updating");
      this.pharmaService.UpdateMedicine(form.value).subscribe(
        (result) => {
          console.log(result);
          this.resetForm(form);
          this.toastrService.success("Updated");
          this.router.navigate(['app-list-pmedicine']);
        
        }
      );
    }
  
    // Reset form
    resetForm(form: NgForm) {
      if (form == null) {
        form.resetForm();
      }
    }
  
  }
