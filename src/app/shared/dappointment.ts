export class Dappointment {
    
    appointmentId: number;
    tokenNo: number;
    appointmentIsActive: string;
    patientId: number;
    appCreatedOn:Date;
    patient: {
      registrationNumber: string;
      patientName: string;
      patientAge: number;
      patientGender: string;
      patientPhoneNumber: string;
      patientAddress: string;
      patientBloodGroup: string;
      patientCreatedOn: Date;
    };
    departmentId: number;
    department: {
      departmentName: string;
    };
    doctorId: number;
    doctor: {
      doctorRegNo: string;
      doctorName: string;
      userId: number;
    };
}
    

