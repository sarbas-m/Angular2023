export class Rpatientbill {

    patientBillId: number=0;
    patientBillAmount: number=0;
    patientbillCreatedOn: Date=new Date();
    patientBillIsActive: String='';
    patientBillNo: String='';
    appointmentId: number=0;
    appointment: {
        appointmentId: number;
        tokenNo: number;
        appointmentIsActive: String;
        appCreatedOn: Date;
        appValidityDate: Date;
        patientId: number;
        patient: {
            patientId: number;
            registrationNumber: String;
            patientName: String;
            patientAge: number;
            patientGender: number;
            patientPhoneNumber: String;
            patientAddress: String;
            patientBloodGroup: String;
            patientCreatedOn: Date;
            patientEmail: String;
            patientIsActive: String;
            validityDate: Date;
        },
        departmentId: number;
        doctorId: number;
        doctor: {
            doctorId: number;
            doctorRegNo: String;
            doctorName: String;
            doctorDateOfBirth:Date;
            doctorGender: String;
            "doctorBloodGroup": "O+",
            "doctorPhoneNo": "9547821457",
            "doctorAddress": "yuvana nilay",
            "doctorQualification": "mh",
            "doctorEmail": "gfcg@gmail.com",
            "doctorConsultationFee": 200,
            "isActive": "true",
            "userId": null,
            "user": null,
            departmentId: number;
            department: {
                departmentId: number;
                departmentName:String;
            }
        }
    }
    
}
