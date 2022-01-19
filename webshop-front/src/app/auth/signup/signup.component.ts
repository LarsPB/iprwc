import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  validForm:boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    public authService: AuthService) { }


  ngOnInit(){
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.mustMatch("password", "confirmPassword")
      }
    );
  }


  get f() {
    return this.signupForm.controls;
  }

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.createUser(this.f['email'].value, this.f['password'].value);
    this.router.navigate(['/login'], {relativeTo: this.route});
  }



  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}







}
