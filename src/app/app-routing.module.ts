import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RlistPatientComponent } from './receptionist/rlist-patient/rlist-patient.component';
import {RaddPatientComponent} from './receptionist/radd-patient/radd-patient.component';
import {ReditPatientComponent} from './receptionist/redit-patient/redit-patient.component';
import { RbookAppointmentComponent } from './receptionist/rbook-appointment/rbook-appointment.component';
import { RlistAppointmentComponent } from './receptionist/rlist-appointment/rlist-appointment.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RbillPatientComponent } from './receptionist/rbill-patient/rbill-patient.component';

const routes: Routes = [
  {path:'',component:ReceptionistComponent},
  {path:'app-receptionist',component:ReceptionistComponent},
  {path:'app-rlist-appointment',component:RlistAppointmentComponent},
  {path:'rpatient-list',component:RlistPatientComponent},
  {path:'radd-patient',component:RaddPatientComponent},
  {path:'app-redit-patient/:patientId',component:ReditPatientComponent},
  {path:'app-rbook-appointment/:patientId',component:RbookAppointmentComponent},
  
  {path:'app-radd-patient',component:RaddPatientComponent},
  {path:'app-rlist-patient',component:RlistPatientComponent},
  {path:'app-rbill-patient/:patientId',component:RbillPatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
