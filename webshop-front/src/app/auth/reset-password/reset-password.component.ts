import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onReset(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.reset(form.value.email);
  }

}
