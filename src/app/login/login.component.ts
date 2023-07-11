import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
//
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm: FormGroup;
  isSubmitted = false;
  error: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,private location:Location) { }

  ngOnInit(): void {
    
    history.pushState(null,null,location.href);
    window.onpopstate=()=>{
      this.location.forward();
    };
    this.loginForm = this.formBuilder.group({
      //formcontrolname fields
      userName: ['', Validators.required],
      passWord: ['', Validators.required]

      
    })
  }
  get formControls() {
    return this.loginForm.controls;
  }
  loginCredentials() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    console.log("Submitted form for credentials");

    //form is invalid
    if (this.loginForm.invalid) {
      this.error = "Sorry! invalid entry..try again";

    }
    //form is valid
    if (this.loginForm.valid) {
      console.log("submitted with valid")


      //calling method from authservice
      this.authService.loginVerify(this.loginForm.value).subscribe(
        response => {
          this.error = '';
          console.log(response);
          //set sessionstorage and localstorage(browser->inspect->application)
          //SessionStorage-changes browser to browser
          //store the values of response.uName and response.roleId
          //representating the username and access role in the browser 
          sessionStorage.setItem('USERNAME', response.data.username);
          sessionStorage.setItem('ACCESS_ROLE', response.data.roleId.toString());

          //stores the same value in browsers local storage.The difference is that sessionStorage data
          //is cleared when the browser session ends.
          //while local data storage persists across browser session 
          //localstorage--same for all browsers.
          localStorage.setItem('USERNAME', response.data.username)
          localStorage.setItem('ACCESS_ROLE', response.data.roleId.toString())

          if (response == null) {
            this.error = "invalid username and or password";

          }
          else if (response.data.roleId == 1) {
            const userId = response.data.userId;
            
            console.log(userId)
            this.router.navigate(['app-doctor',userId]);
            // this.router.navigateByUrl('app-doctor')
            console.log('doctor')
          } else if (response.data.roleId == 2) {
            this.router.navigateByUrl('app-receptionist')
            console.log('receptionist')
          } else if (response.data.roleId == 3) {
            this.router.navigateByUrl('app-labtechnician')
            console.log('pharmacist')
          } else if (response.data.roleId == 4) {
            this.router.navigateByUrl('app-pharmacist')
            console.log('labtechnician')
          }else {
            this.error = "sorry!you are not allowed to acces the system"
          }

        }, error => {
          console.log(error)
          this.error = "invalid username or password !please try agin"
        }
      )
    }
  }

}
