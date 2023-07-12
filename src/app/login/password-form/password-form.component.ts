import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from'src/app/shared/auth.service'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  passWordForm: FormGroup;
 isSubmitted = false;
 error: string = '';
 userId:number
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private authService: AuthService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
     this.userId=this.route.snapshot.params['userId']
    this.passWordForm = this.formBuilder.group({
      //formcontrolname fields
      otp: ['', Validators.required],
      passWord: ['', Validators.required],

      
    })
  }
  get formControls() {
    return this.passWordForm.controls;
  }

  newPassword() {
    console.log(this.passWordForm.value);
    this.isSubmitted = true;
    console.log("form submitted");

    //form is invalid
    if (this.passWordForm.invalid) {
      this.error = "Sorry! invalid entry..try again";

    }
    //form is valid
    if (this.passWordForm.valid) {
      console.log("submitted with valid")


      //calling method from authservice
      this.authService.passWordChange(this.passWordForm.value,this.userId).subscribe(
        response => {
          this.error = '';
          console.log(response);

          if (response == null) {
            this.error = response.error;
            this.toastr.success('invalid otp');
            
          }

          else  {
            this.toastr.success('password successfully changed');
            this.router.navigate(['app-login']);
            
          }

        }, error => {
          console.log(error)
          this.error = "invalid otp!please try agin"
        }
      )
    }
  }

}
