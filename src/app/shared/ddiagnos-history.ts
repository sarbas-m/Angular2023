export class DdiagnosHistory {


    diagnosId: number
    diagnos: String
    diagnosCreatedOn: Date
    appointmentId: number
    appointment: {

        departmentId: number
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
}

