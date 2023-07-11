export class Ddoctornote {

    
            doctorNoteId:number
            note: String
            doctorNoteCreatedOn: Date
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
        
