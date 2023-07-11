import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DoctorService} from'src/app/shared/doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-doctor-patienthistory',
  templateUrl: './list-doctor-patienthistory.component.html',
  styleUrls: ['./list-doctor-patienthistory.component.scss']
})
export class ListDoctorPatienthistoryComponent implements OnInit {

  showDetails: boolean = false;
  showDetailsNote: boolean = false;
  showDetailsMed: boolean = false;
  showDetailsTest: boolean = false;
  showDetailsRep: boolean = false;
   userId:number
   tokenNo:number
   patientId:number
   appointmentId:number

   page:number=1;
  filter:number;
  constructor(private router:ActivatedRoute,public doctorServices:DoctorService,private route:Router) { }

  ngOnInit(): void {
    this.userId=this.router.snapshot.params['userId']
    this.tokenNo=this.router.snapshot.params['tokenNo']
    this.patientId=this.router.snapshot.params['patientId']
    this.appointmentId=this.router.snapshot.params['appointmentId']
    this.doctorServices.BindListDiagnosHistory(this.patientId)
    this.doctorServices.BindListDoctorNoteHistory(this.patientId)
    this.doctorServices.BindMedicineHistory(this.patientId)
    this.doctorServices.BindTestHistory(this.patientId)
    this.doctorServices.BindTestReportHistory(this.patientId)
  }
  startDiagnos(){
    this.route.navigate(['app-list-doctor-form',this.userId,this.tokenNo,this.patientId,this.appointmentId]);
  }
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
  toggleDetailsNote(): void {
    this.showDetailsNote = !this.showDetailsNote;
  }
  toggleDetailsMed(): void {
    this.showDetailsMed = !this.showDetailsMed;
  }
  toggleDetailsTest(): void {
    this.showDetailsTest = !this.showDetailsTest;
  }
  toggleDetailsRep(): void {
    this.showDetailsRep = !this.showDetailsRep;
  }

}
