import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLabTestComponent } from './labtechnician/list-lab-test/list-lab-test.component';
import { AddLabtestComponent } from './labtechnician/add-labtest/add-labtest.component';
import { EditLabtestComponent } from'./labtechnician/edit-labtest/edit-labtest.component';
import { ListLabtestprescriptionComponent } from './labtechnician/list-labtestprescription/list-labtestprescription.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { ListLabtestreportComponent } from './labtechnician/list-labtestreport/list-labtestreport.component';
import { EditLabtestreportComponent } from './labtechnician/edit-labtestreport/edit-labtestreport.component';
import { AddTestResultComponent } from './labtechnician/add-test-result/add-test-result.component';
import { EditTestResultComponent } from './labtechnician/edit-test-result/edit-test-result.component';
import { ViewTestReportComponent } from './labtechnician/view-test-report/view-test-report.component';
import { ViewTestBillComponent } from './labtechnician/view-test-bill/view-test-bill.component';
import { RlistPatientComponent } from './receptionist/rlist-patient/rlist-patient.component';
import {RaddPatientComponent} from './receptionist/radd-patient/radd-patient.component';
import {ReditPatientComponent} from './receptionist/redit-patient/redit-patient.component';
import { RbookAppointmentComponent } from './receptionist/rbook-appointment/rbook-appointment.component';
import { RlistAppointmentComponent } from './receptionist/rlist-appointment/rlist-appointment.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RbillPatientComponent } from './receptionist/rbill-patient/rbill-patient.component';




const routes: Routes = [
   {path:'',component:LabtechnicianComponent},
   {path:'addTest',component:AddLabtestComponent},
   {path:'app-list-lab-test',component:ListLabTestComponent},
   {path:'app-list-labtestprescription',component:ListLabtestprescriptionComponent},
   {path:'app-edit-labtest/:testId',component:EditLabtestComponent},
   {path:'app-list-labtestreport/:testId/:testPrescriptionId',component:ListLabtestreportComponent},
   {path:'app-list-labtestprescription',component:ListLabtestreportComponent},
   {path:'app-labtechnician',component:LabtechnicianComponent},
   {path:'app-edit-labtestreport/:testPrescriptionId',component:EditLabtestreportComponent},
   {path:'app-add-labtestreport',component:ListLabtestreportComponent},
   {path: 'app-add-test-result/:testPrescriptionId/:testId',component:AddTestResultComponent},
   { path: 'app-edit-labtestreport/:testPrescriptionId/:testReportId', component: EditLabtestreportComponent },
   { path: 'app-edit-test-result/:testPrescriptionId/:testId', component:EditTestResultComponent },
   { path: 'app-list-labtestreport', component:ListLabtestreportComponent },
   { path: 'app-view-test-report/:appointmentId/:testPrescriptionId', component:ViewTestReportComponent },
   { path: 'app-view-test-bill/:appointmentId', component:ViewTestBillComponent},
   {path:'app-receptionist',component:ReceptionistComponent},
   {path:'app-rlist-appointment',component:RlistAppointmentComponent},
   {path:'rpatient-list',component:RlistPatientComponent},
   {path:'radd-patient',component:RaddPatientComponent},
   {path:'app-redit-patient/:patientId',component:ReditPatientComponent},
   {path:'app-rbook-appointment/:patientId',component:RbookAppointmentComponent},
   
   {path:'app-radd-patient',component:RaddPatientComponent},
   {path:'app-rlist-patient',component:RlistPatientComponent},
   {path:'app-rbill-patient/:patientId',component:RbillPatientComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
