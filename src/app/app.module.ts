import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
//imported module
import{HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import{Ng2SearchPipeModule}from 'ng2-search-filter'
import { AppRoutingModule } from './app-routing.module';
import{NgxPaginationModule} from'ngx-pagination';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPmedicineComponent } from './pharmacist/add-pmedicine/add-pmedicine.component';
import { ListPmedicineComponent } from './pharmacist/list-pmedicine/list-pmedicine.component';
import { EditMedicineComponent } from './pharmacist/edit-medicine/edit-medicine.component';
import { AddMedcompanyComponent } from './pharmacist/add-medcompany/add-medcompany.component';
import { ListMedcompanyComponent } from './pharmacist/list-medcompany/list-medcompany.component';
import { EditMedcompanyComponent } from './pharmacist/edit-medcompany/edit-medcompany.component';
import { ListPrescriptionComponent } from './pharmacist/list-prescription/list-prescription.component';
import { ListViewpressComponent } from './pharmacist/list-viewpress/list-viewpress.component';
import { BillMedicineComponent } from './pharmacist/bill-medicine/bill-medicine.component';
import { AddMedicineReorderComponent } from './pharmacist/add-medicine-reorder/add-medicine-reorder.component';
import { ListMedicineReorderComponent } from './pharmacist/list-medicine-reorder/list-medicine-reorder.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    ReceptionistComponent,
    PharmacistComponent,
    LabtechnicianComponent,
    AddPmedicineComponent,
    ListPmedicineComponent,
    EditMedicineComponent,
    AddMedcompanyComponent,
    ListMedcompanyComponent,
    EditMedcompanyComponent,
    ListPrescriptionComponent,
    ListViewpressComponent,
    BillMedicineComponent,
    AddMedicineReorderComponent,
    ListMedicineReorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

