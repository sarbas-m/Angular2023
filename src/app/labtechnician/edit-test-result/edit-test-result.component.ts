import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import{LabTechnicianService} from'src/app/shared/lab-technician.service'
import{Ltestreport}from'src/app/shared/ltestreport'
@Component({
  selector: 'app-edit-test-result',
  templateUrl: './edit-test-result.component.html',
  styleUrls: ['./edit-test-result.component.scss']
})
export class EditTestResultComponent implements OnInit {

  testPrescriptionId:number
  testId:number
  testReport:Ltestreport=new Ltestreport()

  constructor(private route:ActivatedRoute,private labTechnicianServices:LabTechnicianService) { }

  ngOnInit(): void {
    this.testPrescriptionId=this.route.snapshot.params['testPrescriptionId']
    this.testId=this.route.snapshot.params['testId'];
    this.labTechnicianServices.getResultForEdit(this.testPrescriptionId)
    .subscribe(data=>{
      console.log(data)
      this.testReport=data;


      this.labTechnicianServices.formDataReport=Object.assign({},data);
    },error=>console.log(error));



  }
}
