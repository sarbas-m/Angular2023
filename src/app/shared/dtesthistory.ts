export class Dtesthistory {


    testPrescriptionId: number
    testPresCreatedOn: Date
    appointment: {
        doctor: {

            doctorName: String
            department: {
                departmentName: String
            }
        }
    }
    testId: number
    test: {
        testName: String

    }
   
}

