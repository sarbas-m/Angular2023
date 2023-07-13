import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { ListPmedicineComponent } from './pharmacist/list-pmedicine/list-pmedicine.component';
import { AddPmedicineComponent } from './pharmacist/add-pmedicine/add-pmedicine.component';
import { EditMedicineComponent } from './pharmacist/edit-medicine/edit-medicine.component';
import { ListMedcompanyComponent } from './pharmacist/list-medcompany/list-medcompany.component';
import {AddMedcompanyComponent} from'./pharmacist/add-medcompany/add-medcompany.component';
import { ListPrescriptionComponent } from './pharmacist/list-prescription/list-prescription.component';
import { ListViewpressComponent } from './pharmacist/list-viewpress/list-viewpress.component';
import { BillMedicineComponent } from './pharmacist/bill-medicine/bill-medicine.component'
import { ListMedicineReorderComponent } from './pharmacist/list-medicine-reorder/list-medicine-reorder.component';
import { AddMedicineReorderComponent } from './pharmacist/add-medicine-reorder/add-medicine-reorder.component';

const routes: Routes = [
  {path:'',component:PharmacistComponent},
  {path:'app-list-pmedicine',component:ListPmedicineComponent},
  {path:'addpmedicine',component:AddPmedicineComponent},
  {path:'app-edit-medicine/:medicineId',component:EditMedicineComponent},
  {path:'app-list-medcompany',component:ListMedcompanyComponent},
  {path: 'app-add-medcompany',component:AddMedcompanyComponent},
  {path:'app-list-prescription',component:ListPrescriptionComponent},
  {path:'app-list-viewpress',component:ListViewpressComponent},
  {path:'app-bill-medicine/:appointmentId',component:BillMedicineComponent},
  {path:'app-pharmacist',component:PharmacistComponent},
  {path:'app-add-medicine-reorder',component:AddMedicineReorderComponent},
  {path:'app-list-medicine-reorder',component:ListMedicineReorderComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

