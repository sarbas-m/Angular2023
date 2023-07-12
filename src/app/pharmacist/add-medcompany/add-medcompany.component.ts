import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacistService } from 'src/app/shared/pharmacist.service';

@Component({
  selector: 'app-add-medcompany',
  templateUrl: './add-medcompany.component.html',
  styleUrls: ['./add-medcompany.component.scss']
})
export class AddMedcompanyComponent implements OnInit {

  constructor(public pharmaService: PharmacistService, private router: Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    window.onpopstate = () => {
      location.reload();
    };
    
    
  }

  onSubmit(form: NgForm) {
    let addId = this.pharmaService.formDatacompany.companyId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  InsertRecord(from: NgForm) {
    console.log("Inserting");
    this.pharmaService.insertCompany(from.value).subscribe(
      (result) => {
        console.log(result);
        this.toastrService.success("Added");
        this.router.navigate(['app-list-medcompany']);
      }
    );
    }

    updateRecord(form: NgForm) {
      console.log("Updating");
      this.pharmaService.UpdateCompany(form.value).subscribe(
        (result) => {
          console.log(result);
          this.resetForm(form);
          alert("Successfully updated");
        
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

