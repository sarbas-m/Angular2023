export class Dtestreporthistory {


    testReportId: number
    testActualValue: number
    reportCreatedOn: Date
    testPrescriptionId: number
    testPrescription: {
        appointment: {
            doctorId: 1
            doctor: {

                doctorName: String
                department: {
                    departmentName: String
                }
            }
        }
        test: {
            testName: String
            lowRange: number
            highRange: number

            unit: String
        }
    }

}
