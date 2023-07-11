import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import{Ltest} from'src/app/shared/ltest';
import{Ltestprescription} from'src/app/shared/ltestprescription';
import{Ltestreport} from'src/app/shared/ltestreport';
import{Ltestbill} from 'src/app/shared/ltestbill';

@Injectable({
  providedIn: 'root'
})
export class LabTechnicianService {
  formData:Ltest = new Ltest();
  formDataReport:Ltestreport=new Ltestreport();
  ltests:Ltest[];
  ltestsById:Ltest[];
  ltesting:Ltest[];
  ltestprescriptions:Ltestprescription[]
  ltestReport:Ltestreport[]
  ltestReportPatient:Ltestreport[]
  ltestbill:Ltestbill[]
  

  constructor(private httpClient:HttpClient) { }

  //for Listing test
  BindListTest()
  {
    this.httpClient.get(environment.apiUrl + "/api/labtests")
    .toPromise().then(response=>
      this.ltests=response as Ltest[]);
  }

  BindListTestForId(testId:number)
  {
    this.httpClient.get(environment.apiUrl + "/api/labtestsId/"+testId)
    .toPromise().then(response=>
      this.ltesting=response as Ltest[]);
  }

 BindListTestById(testId:number)
  {

    this.httpClient.get(environment.apiUrl + "/api/labtests/"+testId)
    .toPromise().then(response=>
      this.ltests=response as Ltest[]);
      
  }
 
  getTestReportById(testPrescriptionId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/labtests/" + testPrescriptionId);
  }
  //for editing result
  getResultForEdit(testPrescriptionId: number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/report/"+testPrescriptionId);
  }
  //Update Employee
  UpdateTestResult(ltestReport:Ltestreport):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/report",ltestReport);
  }

  BindListPres()
  {
    this.httpClient.get(environment.apiUrl + "/api/testpres")
    .toPromise().then(response=>
      this.ltestprescriptions=response as Ltestprescription[]);
  }
//Listing patient Report

BindListPatientReport(appointmentId:number)
{
  this.httpClient.get(environment.apiUrl + "/api/report/history/"+appointmentId)
  .toPromise().then(response=>
    this.ltestReportPatient=response as Ltestreport[]);
}

  //Insert test
  insertTest(test:Ltest):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/api/labtests",test);
  }

  //Update test
  UpdateTest(test:Ltest):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/test",test);
  }

  //delete test
  deleteTest(testId:number){
    return this.httpClient.delete(environment.apiUrl+"/api/test/"+testId);
  }

  //Get a particular test
  getTest(testId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/labtests/"+testId);
  }

  //Insert testreport
  insertTestReport(testreport:Ltestreport):Observable<any>
  {
    console.log(testreport)
    return this.httpClient.post(environment.apiUrl+"/api/report",testreport);
  }


  //next two is added for testing
 /*getTestById(testId: number): Observable<any> {
   console.log("dsf")
    return this.httpClient.get(environment.apiUrl+"/api/labtests/"+testId)
    .toPromise().then(response=>
      this.ltestsById=response as Ltestprescription[]);;
  }*/

  addLabTestReport(report: Ltestreport): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/api/labtestreports`, report);
  }

  //get a particular testreport
  getTestReport(testReportId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/report/"+testReportId);
  }
  //Get all test reports
  getTestReports(): Observable<Ltestreport[]> {
    return this.httpClient.get<Ltestreport[]>(`${environment.apiUrl}/api/report`);
  }

  BindListTestBill(appointmentId:number)
  {
    this.httpClient.get(environment.apiUrl + "/api/bill/"+appointmentId)
    .toPromise().then(response=>
      this.ltestbill=response as Ltestbill[]);
  }
 /*
  disableTestPrescription(appointmentId:number){
    console.log(appointmentId)
    return this.httpClient.delete(environment.apiUrl+"/testpres/"+appointmentId);
  }*/
  disableTestPrescription(appointmentId: number) {
    console.log(appointmentId);
    return this.httpClient.delete(`${environment.apiUrl}/api/testpres/${appointmentId}`).subscribe(
      () => {
        console.log('Delete request successful');
      },
      (error) => {
        console.log('Error occurred during delete request:', error);
      }
    );
  }

}
 
