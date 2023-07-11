export class Ltestprescription {
        
  testPrescriptionId :number=0;
   testPresCreatedOn : Date= new Date;
   testPresIsActive : boolean=true;
   appointmentId : number =0;
   appointment : {
       appointmentId : number;
       tokenNo : number;
       appointmentIsActive : boolean;
       appCreatedOn :  Date;
       appValidityDate :  Date;
       patientId :number;
       patient : {
           patientId : number;
           registrationNumber :  number;
           patientName :  string;
           patientAge : number;
           patientGender :    string;
           patientPhoneNumber :  number;
           patientAddress :   string;
           patientBloodGroup :  string;
           patientCreatedOn :  Date;
           patientEmail :  string;
           patientIsActive :  boolean ;
           validityDate :  Date;
      };
       departmentId : number;
       doctorId :  number ;
       doctor : {
           doctorId : number;
           doctorRegNo :  number;
           doctorName :  string;
           doctorDateOfBirth :  Date;
           doctorGender :  string;
           doctorBloodGroup : string;
           doctorPhoneNo :  number;
           doctorAddress :  string;
           doctorQualification : string;
           doctorEmail :  string;
           doctorConsultationFee : number;
           isActive : boolean ;
           userId : number;
           user : {
               userId :number;
               userName :  string;
               passWord :  string;
               roleId : number;
               role : {
                   roleId : number;
                   roleName :  string;
              }
          };
           departmentId : number;
           department : {
               departmentId :number;
               departmentName : string;
          }
      }
  };
   testId : number;
   test : {
       testId : number;
       testNumber : number;
       testName :  string;
       lowRange : number;
       highRange : number;
       testPrice : number;
       isActive :   boolean ;
       testCreatedOn :  Date;
       unit :  string;
  }
}

  