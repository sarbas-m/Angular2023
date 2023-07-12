export class User {


    userId:number=0;
    userName:string='';
    passWord:string='';
    email:String
    otp:number

    status:number=0;
    data:{
        roleId:number;
        AccessTocken:String;
        userId:number;
        username: string;
    };error: any;
}
