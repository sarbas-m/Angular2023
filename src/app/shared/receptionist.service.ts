import { Injectable } from '@angular/core';
import { Rpatient } from './rpatient';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';
import {Rappointment} from 'src/app/shared/rappointment';
import {Rdepartment} from 'src/app/shared/rdepartment';
import {Rdoctor} from 'src/app/shared/rdoctor';
import {Rpatientbill} from 'src/app/shared/rpatientbill';
import {Rreceptionistbill} from 'src/app/shared/rreceptionistbill'

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  patients:Rpatient[];
  formData:Rpatient=new Rpatient();
  appointmentData:Rappointment=new Rappointment();
  departments:Rdepartment[];
  doctors:Rdoctor[];
  appointments:Rappointment[];
  bills:Rpatientbill[];
  recbill:Rreceptionistbill[];

  constructor(private htttpClient:HttpClient) { }

  //for listing patients
  BindListPatientsForRec(){
    this.htttpClient.get(environment.apiUrl+"/api/patients")
    .toPromise().then(response=>
      this.patients=response as Rpatient[] );
  }

  //insert patient
  insertPatient(patien:Rpatient):Observable<any>{

    return this.htttpClient.post(environment.apiUrl+"/api/patients",patien);

  }

  //get patient by id
  getThePatient(pId:number):Observable<any>{

    return this.htttpClient.get(environment.apiUrl+"/api/patients/"+pId);
  }

  //update patient
  updatePatient(patien:Rpatient):Observable<any>{

    return this.htttpClient.put(environment.apiUrl+"/api/patients",patien);
  }

  //deletePatient
  deletePatient(patientId:number){

    return this.htttpClient.delete(environment.apiUrl+"/api/patients/"+patientId);

  }

  //get department list for dropdown
  BindDepartmentListForRec(){
    this.htttpClient.get(environment.apiUrl+"/api/departments")
    .toPromise().then(response=>
      this.departments= response as Rdepartment[] );
      console.log("array ok");
  }

  //get doctors list for dropdown
  BindDoctorListForRec(){
    this.htttpClient.get(environment.apiUrl+"/api/doctors")
    .toPromise().then(response=>
      this.doctors=response as Rdoctor[] );
  }

  //insert appointment

  insertAppointment(appoin:Rappointment):Observable<any>{
      return this.htttpClient.post(environment.apiUrl+"/api/appointments",appoin);
  }

  //get appoinment list
  BindAppointmentListForRec(){
    this.htttpClient.get(environment.apiUrl+"/api/appointments")
    .toPromise().then(response=>
      this.appointments=response as Rappointment[]);
  }

  //delete appointment
  deleteAppointment(appointmentId:number){
    return this.htttpClient.delete(environment.apiUrl+"/api/appointments/"+appointmentId);
  }
  
  //bill get list
  BindBillList(patientId:number){
    this.htttpClient.get(environment.apiUrl+"/api/bills/"+patientId)
    .toPromise().then(response=>
      this.recbill=response as Rreceptionistbill[]);
    
  }

}
