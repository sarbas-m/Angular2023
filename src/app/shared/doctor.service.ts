import { Injectable } from '@angular/core';
import { Dappointment } from './dappointment';
import{HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import{DdiagnosHistory} from'src/app/shared/ddiagnos-history'
import{Ddoctornote} from'src/app/shared/ddoctornote'
import{Dmedicinehistory} from'src/app/shared/dmedicinehistory'
import{Dtesthistory} from'src/app/shared/dtesthistory'
import{Dtestreporthistory}from'src/app/shared/dtestreporthistory'
import{Dmedicine} from'src/app/shared/dmedicine'
import{Dtest} from'src/app/shared/dtest'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  formData:DdiagnosHistory=new DdiagnosHistory();
  formDataNote:Ddoctornote=new Ddoctornote();
  formDataMed:Dmedicinehistory=new Dmedicinehistory();
  formDataTest:Dtesthistory=new Dtesthistory()
  dappointments:Dappointment[];
  ddiagnosHistorys:DdiagnosHistory[];
  ddoctornotes:Ddoctornote[]
  dmedicinehistorys:Dmedicinehistory[]
  dtesthistorys:Dtesthistory[]
  dtestreporthistorys:Dtestreporthistory[]
  dmedicines:Dmedicine[]
  dtests:Dtest[]

  constructor(private httpClient:HttpClient) { }


  BindListAppointment(userId: number) {
    this.httpClient.get(environment.apiUrl + "/api/doctorAppointments/" + userId)
      .toPromise()
      .then(response => {
        this.dappointments = response as Dappointment[];
      })
      .catch(error => {
        // Handle any error that occurred during the HTTP request
        console.error('An error occurred:', error);
      });
  }
  BindListDisableAppointment(userId: number) {
    this.httpClient.get(environment.apiUrl + "/api/doctorAppointmentsDisable/" + userId)
      .toPromise()
      .then(response => {
        this.dappointments = response as Dappointment[];
      })
      .catch(error => {
        // Handle any error that occurred during the HTTP request
        console.error('An error occurred:', error);
      });
  }
  BindListPatient(tokenNo:number){
    console.log(tokenNo)
    this.httpClient.get(environment.apiUrl + "/api/doctorPatient/" + tokenNo)
    .toPromise()
      .then(response => {
        this.dappointments = response as Dappointment[];
      })
      .catch(error => {
        // Handle any error that occurred during the HTTP request
        console.error('An error occurred:', error);
      });
  }
  BindListDiagnosHistory(patientId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorDiagnos/" + patientId)
    .toPromise()
      .then(response => {
        this.ddiagnosHistorys = response as DdiagnosHistory[];
      })
  }
  BindListTodaysDiagnosHistory(appointmentId:number,userId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorDiagnosToday/" + appointmentId+ "/" +userId)
    .toPromise()
      .then(response => {
        this.ddiagnosHistorys = response as DdiagnosHistory[];
      })
  }
  deleteTodayDiagnos(diagnosId: number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl + "/api/doctorDiagnos/" + diagnosId)
  }
  BindListDoctorNoteHistory(patientId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorNote/" + patientId)
    .toPromise()
      .then(response => {
        this.ddoctornotes = response as Ddoctornote[];
      })
  }
  
  BindListTodaysDoctorNoteHistory(appointmentId:number,userId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorNoteToday/" + appointmentId+"/"+userId
    )
    .toPromise()
      .then(response => {
        this.ddoctornotes = response as Ddoctornote[];
      })
  }
  deleteTodayNote(doctorNoteId: number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl + "/api/doctorNote/" + doctorNoteId)
  }
  BindMedicineHistory(patientId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorMedicine/" + patientId)
    .toPromise()
      .then(response => {
        this.dmedicinehistorys = response as Dmedicinehistory[];
      })
  }
  BindListTodaysMedicineHistory(appointmentId:number,userId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorMedicineToday/" + appointmentId+"/"+userId
    )
    .toPromise()
      .then(response => {
        this.dmedicinehistorys = response as Dmedicinehistory[];
      })
  }
  deleteTodayMedicine(medicinePrescriptionId: number):Observable<any>{
    console.log(medicinePrescriptionId)
    return this.httpClient.delete(environment.apiUrl + "/api/doctorMedicine/" + medicinePrescriptionId)
  }
  BindTestHistory(patientId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorTest/" + patientId)
    .toPromise()
      .then(response => {
        this.dtesthistorys = response as Dtesthistory[];
      })
  }
  BindListTodaysTestHistory(appointmentId:number,userId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorTestToday/" + appointmentId+"/"+userId
    )
    .toPromise()
      .then(response => {
        this.dtesthistorys = response as Dtesthistory[];
      })
  }
  deleteTodayTest(testPrescriptionId: number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl + "/api/doctorTest/" + testPrescriptionId)
  }
  BindTestReportHistory(patientId:number){
    this.httpClient.get(environment.apiUrl + "/api/doctorReport/" + patientId)
    .toPromise()
      .then(response => {
        this.dtestreporthistorys = response as Dtestreporthistory[];
      })
  }
  BindListMedicine(){
    this.httpClient.get(environment.apiUrl + "/api/doctorMedList")
    .toPromise()
      .then(response => {
        this.dmedicines = response as Dmedicine[];
      })
  }
  
  BindListTest(){
    this.httpClient.get(environment.apiUrl + "/api/doctorTestList")
    .toPromise()
      .then(response => {
        this.dtests = response as Dtest[];
      })
  }

  insertDoctorDiagnos(dia:DdiagnosHistory):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/api/doctorDiagnos",dia)
  }

  insertDoctorNote(note:Ddoctornote):Observable<any>
  {
    
    return this.httpClient.post(environment.apiUrl+"/api/doctorNote",note)
  }

  insertMedicine(med:Dmedicinehistory):Observable<any>
  {
    
    return this.httpClient.post(environment.apiUrl+"/api/doctorMedicine",med)
  }

  insertTest(test:Dtesthistory):Observable<any>
  {
    
    return this.httpClient.post(environment.apiUrl+"/api/doctorTest",test)
  }

  disableAppointment(appointmentId:number,userId:number){
    return this.httpClient.delete(environment.apiUrl+"/api/doctorAppointments/"+appointmentId+"/"+userId);
  }

}
