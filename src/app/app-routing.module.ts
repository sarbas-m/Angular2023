import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import{AuthGuard} from'./shared/auth.guard';
import { ListDoctorAppointmentComponent } from './doctor/list-doctor-appointment/list-doctor-appointment.component';
import { ListDoctorPatientComponent } from './doctor/list-doctor-patient/list-doctor-patient.component';
import { ListDoctorPatienthistoryComponent } from './doctor/list-doctor-patienthistory/list-doctor-patienthistory.component';
import { AddDiagnosComponent } from './doctor/add-diagnos/add-diagnos.component';
import { ListDoctorFormComponent } from './doctor/list-doctor-form/list-doctor-form.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'app-receptionist',component:ReceptionistComponent,canActivate:[AuthGuard],data:{role:'2'}},
  {path:'app-doctor/:userId',component:DoctorComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'app-list-doctor-appointment/:userId',component:ListDoctorAppointmentComponent},
  {path:'app-list-doctor-patient/:userId/:tokenNo',component:ListDoctorPatientComponent},
  {path:'app-list-doctor-patienthistory/:userId/:tokenNo/:patientId/:appointmentId',component:ListDoctorPatienthistoryComponent},
  {path:'login',component:LoginComponent},
  {path:'app-add-diagnos/:userId/:tokenNo/:patientId/:appointmentId',component:AddDiagnosComponent},
  {path:'app-list-doctor-form/:userId/:tokenNo/:patientId/:appointmentId',component:ListDoctorFormComponent},
  {path:'app-pharmacist',component:PharmacistComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'app-labtechnician',component:LabtechnicianComponent,canActivate:[AuthGuard],data:{role:'3'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
