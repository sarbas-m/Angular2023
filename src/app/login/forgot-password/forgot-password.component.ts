import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from'src/app/shared/auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
 //declare variables
 forgotPassword: FormGroup;
 isSubmitted = false;
 error: string = '';
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.forgotPassword = this.formBuilder.group({
      //formcontrolname fields
      email: ['', Validators.required],

      
    })
  }
  get formControls() {
    return this.forgotPassword.controls;
  }

  //forgot
  mailVerify() {
    console.log(this.forgotPassword.value);
    this.isSubmitted = true;
    console.log("mail submitted");

    //form is invalid
    if (this.forgotPassword.invalid) {
      this.error = "Sorry! invalid entry..try again";

    }
    //form is valid
    if (this.forgotPassword.valid) {
      console.log("submitted with valid")


      //calling method from authservice
      this.authService.mailVerification(this.forgotPassword.value).subscribe(
        response => {
          this.error = '';
          console.log(response);

          if (response == null) {
            this.error = response.error;
            this.toastr.success('invalid mail');
            
          }
          else  {
            this.toastr.success('check your otp for password');
            console.log(response.data)
            const userId = response.data.userId;
            console.log("user"+userId)
            this.router.navigate(['app-password-form',userId]);
            
          }

        }, error => {
          console.log(error)
          this.error = "invalid mail!please try agin"
        }
      )
    }
  }

}
