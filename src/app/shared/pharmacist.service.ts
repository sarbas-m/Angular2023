import { Injectable } from '@angular/core';
import { Pmedicine } from './pmedicine';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Medcompany} from './medcompany';
import {Medprescription}from './medprescription';
import {BillMed}from './bill-med'
import{PmedicineReOrder}from'src/app/shared/pmedicine-re-order'



@Injectable({
  providedIn: 'root'
})
export class PharmacistService {
  pmedicine:Pmedicine[];
  medcompany:Medcompany[];
  medprescription:Medprescription[];
  billmed:BillMed[];
  ordermed:PmedicineReOrder[];

  formData:Pmedicine=new Pmedicine();
  formDatacompany:Medcompany=new Medcompany();
  formDatapres:Medprescription=new Medprescription();
  formBill:BillMed=new BillMed();
  formReOrder:PmedicineReOrder=new PmedicineReOrder();


  constructor(private httpClient:HttpClient) { }
  // for List
  BindListMedicine(){
    this.httpClient.get(environment.apiUrl+"/api/medicines")
    .toPromise().then(response=> 
      this.pmedicine=response as Pmedicine[]);
  }
  //list bill
    // for List
    BindMedicineBill(appointmentId:number){
      this.httpClient.get(environment.apiUrl+"/api/medidcineBill/"+appointmentId)
      .toPromise().then(response=> 
        this.billmed=response as BillMed[]);
    }

  //Insert med
insertMedicine(med:Pmedicine):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"/api/medicines",med);
}
 //Insert Reorder
 insertMedicineReorder(med:Pmedicine):Observable<any>
 {
   return this.httpClient.post(environment.apiUrl+"/api/order",med);
 }

// Get a particular Employee
getMedicine(medId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/medicines/"+medId);

}


//Upadate Employee
UpdateMedicine(med:Pmedicine):Observable<any>{
  return this.httpClient.put(environment.apiUrl+"/api/medicines",med);
}

deleteMedicine(medicineId: number): Observable<any> {
  console.log(medicineId)
  return this.httpClient.delete(environment.apiUrl + "/api/medicines/" + medicineId);
}

 // for List
 BindListCompany(){
  this.httpClient.get(environment.apiUrl+"/api/medcompanys")
  .toPromise().then(response=>
  this.medcompany=response as Medcompany[]);
}

 //Insert med
 insertCompany(cmp:Medcompany):Observable<any>
 {
   return this.httpClient.post(environment.apiUrl+"/api/medcompanys",cmp);
 }
 
 // Get a particular Employee
 getCompany(companyId:number):Observable<any>{
   return this.httpClient.get(environment.apiUrl+"/api/medcompanys/"+companyId);
 
 }
 
 
 //Upadate Employee
 UpdateCompany(cmp:Medcompany):Observable<any>{
   return this.httpClient.put(environment.apiUrl+"/api/medcompanys",cmp);
 }
 
 deleteCompany(companyId: number): Observable<any> {
   console.log("gi")
   return this.httpClient.delete(environment.apiUrl + "/api/medcompanys/" + companyId);
 }

 DisablePrescription(appointmentId:number){
  return this.httpClient.delete(`${environment.apiUrl}/api/press/${appointmentId}`).subscribe(
    () => {
      console.log('Delete request successful');
    },
    (error) => {
      console.log('Error occurred during delete request:', error);
    }
  );

 }
 

// for List
BindListPress(){
  this.httpClient.get(environment.apiUrl+"/api/press")
  .toPromise().then(response=> 
    this.medprescription=response as Medprescription[]);
}


// for List
BindBillMedic(){
  this.httpClient.get(environment.apiUrl+"/api/medidcineBill")
  .toPromise().then(response=> 
    this.billmed=response as BillMed[]);
}

BindListOrder(){
this.httpClient.get(environment.apiUrl+"/api/order")
  .toPromise().then(response=> 
    this.ordermed=response as PmedicineReOrder[]);
}
}
