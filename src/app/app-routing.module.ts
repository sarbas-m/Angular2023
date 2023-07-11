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
   { path: 'app-view-test-bill/:appointmentId', component:ViewTestBillComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
