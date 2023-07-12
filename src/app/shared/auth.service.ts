import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  public loginVerify(user: User) {
    //calling the api for checking username and password
    console.log("sad")
    return this.httpClient.get<User>(environment.apiUrl + '/api/user/' + user.userName + '&' + user.passWord)
  }




  fetchValues(user: User): void {

    this.httpClient.get<User>(environment.apiUrl + '/api/user/' + user.userName + '&' + user.passWord).subscribe(response => {
      // Check the status code
      if (response.status === 200) {
        const role = response.data.roleId;
        const accessToken = response.data.AccessTocken;
        const userName = response.data.username;
        const userId = response.data.userId;

        // Do something with the values
        console.log(role, accessToken, userName, userId);
      } else {
        // Handle error if necessary
        console.error(response.error);
      }
    });
  }
  //password change
  mailVerification(user: User) {

  return this.httpClient.get<User>(environment.apiUrl + '/api/users/' + user.email)


  }

  passWordChange(user: User,userId:number) {
    console.log()
    return this.httpClient.get<User>(environment.apiUrl + '/api/userN/' + user.otp+'&'+user.passWord+'&'+userId)


  }
}
