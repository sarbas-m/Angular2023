export class Dmedicinehistory {

    medicinePrescriptionId: number
    days: number
    medPresCreatedOn: Date
    appointmentId: number
    appointment: {
        department: {
            departmentName: String
        }
        doctorId: number
        doctor: {

            doctorName: String
            department: {
                departmentName: String
            }

        }
    }

    dosageId: number
    dosage: {
        dosagePattern: String
        dosageQty: number
    }
    medicineId: number
    medicine: {
        medicineName: String

    }


}
