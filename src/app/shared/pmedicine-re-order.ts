export class PmedicineReOrder {

    
    orderId: number
    orderQty: number
    orderOn: Date
    medicineId: number
    medicine: {
        
        medicineName: String
  
           
        }
    
    companyId: number
    medicineCompany: {
        companyNumber: String
        companyName: String
    }

}