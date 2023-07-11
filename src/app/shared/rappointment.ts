export class Rappointment {

    appointmentId:number= 0;
        tokenNo:number=0;
        appointmentIsActive:String='';
        appCreatedOn:Date=new Date ;
        appValidityDate:Date=new Date;
        patientId:number=0;
        patient: {
            patientId:number;
            registrationNumber:String;
            patientName:String;
            patientAge: number;
            patientGender:String;
            patientPhoneNumber:String;
            patientAddress:String;
            patientBloodGroup:String;
            patientCreatedOn:Date;
            patientEmail:String; 
            patientIsActive:String;
            validityDate: Date;
        };
        departmentId:number;
        doctorId: number;
        doctor: {
            doctorId:number;
            doctorRegNo: String;
            doctorName: String;
            doctorDateOfBirth:Date;
            doctorGender:String;
            doctorBloodGroup:String ;
            doctorPhoneNo:number;
            doctorAddress:String;
            doctorQualification:String;
            doctorEmail: String;
            doctorConsultationFee: number;
            isActive:String;
            userId: number;
            //user: null,
            departmentId: number;
            department: {
                departmentId:number;
                departmentName:String;
            }
        }
}
