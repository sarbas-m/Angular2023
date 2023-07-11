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
import { LoginComponent } from './login/login.component';
import { ListDoctorAppointmentComponent } from './doctor/list-doctor-appointment/list-doctor-appointment.component';
import { ListDoctorPatientComponent } from './doctor/list-doctor-patient/list-doctor-patient.component';
import { ListDoctorPatienthistoryComponent } from './doctor/list-doctor-patienthistory/list-doctor-patienthistory.component';
import { AddDiagnosComponent } from './doctor/add-diagnos/add-diagnos.component';
import { AddDoctorNoteComponent } from './doctor/add-doctor-note/add-doctor-note.component';
import { AddDoctorMedicineComponent } from './doctor/add-doctor-medicine/add-doctor-medicine.component';
import { AddDoctorTestComponent } from './doctor/add-doctor-test/add-doctor-test.component';
import { ListDoctorFormComponent } from './doctor/list-doctor-form/list-doctor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    ReceptionistComponent,
    PharmacistComponent,
    LabtechnicianComponent,
    LoginComponent,
    ListDoctorAppointmentComponent,
    ListDoctorPatientComponent,
    ListDoctorPatienthistoryComponent,
    AddDiagnosComponent,
    AddDoctorNoteComponent,
    AddDoctorMedicineComponent,
    AddDoctorTestComponent,
    ListDoctorFormComponent,
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

