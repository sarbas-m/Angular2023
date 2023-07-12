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
import { RouterModule } from '@angular/router';
import { ListLabTestComponent } from './labtechnician/list-lab-test/list-lab-test.component';
import { AddLabtestComponent } from './labtechnician/add-labtest/add-labtest.component';
import { EditLabtestComponent } from './labtechnician/edit-labtest/edit-labtest.component';
import { ListLabtestprescriptionComponent } from './labtechnician/list-labtestprescription/list-labtestprescription.component';
import { ListLabtestreportComponent } from './labtechnician/list-labtestreport/list-labtestreport.component';
import { AddLabtestreportComponent } from './labtechnician/add-labtestreport/add-labtestreport.component';
import { EditLabtestreportComponent } from './labtechnician/edit-labtestreport/edit-labtestreport.component';
import { AddTestResultComponent } from './labtechnician/add-test-result/add-test-result.component';
import { EditTestResultComponent } from './labtechnician/edit-test-result/edit-test-result.component';
import { ViewTestReportComponent } from './labtechnician/view-test-report/view-test-report.component';
import { ViewTestBillComponent } from './labtechnician/view-test-bill/view-test-bill.component';
import { RlistPatientComponent } from './receptionist/rlist-patient/rlist-patient.component';
import { RaddPatientComponent } from './receptionist/radd-patient/radd-patient.component';
import { ReditPatientComponent } from './receptionist/redit-patient/redit-patient.component';
import { RbookAppointmentComponent } from './receptionist/rbook-appointment/rbook-appointment.component';
import { RlistAppointmentComponent } from './receptionist/rlist-appointment/rlist-appointment.component';
import { RbillPatientComponent } from './receptionist/rbill-patient/rbill-patient.component';
import { ListDisableAppointmentComponent } from './doctor/list-disable-appointment/list-disable-appointment.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { PasswordFormComponent } from './login/password-form/password-form.component';


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
    ListLabTestComponent,
    AddLabtestComponent,
    EditLabtestComponent,
    ListLabtestprescriptionComponent,
    ListLabtestreportComponent,
    AddLabtestreportComponent,
    EditLabtestreportComponent,
    AddTestResultComponent,
    EditTestResultComponent,
    ViewTestReportComponent,
    ViewTestBillComponent,
    RlistPatientComponent,
    RaddPatientComponent,
    ReditPatientComponent,
    RbookAppointmentComponent,
    RlistAppointmentComponent,
    RbillPatientComponent,
    ListDisableAppointmentComponent,
    ForgotPasswordComponent,
    PasswordFormComponent

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
    Ng2SearchPipeModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

