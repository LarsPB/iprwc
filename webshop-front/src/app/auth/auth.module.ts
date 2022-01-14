import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignupComponent } from "./signup/signup.component";


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        ResetPasswordComponent,
        SignupComponent
    ],
    imports: [AppRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
    exports: [
        AuthComponent,
        LoginComponent,
        ResetPasswordComponent,
        SignupComponent   
    ]
})

export class AuthModule {}