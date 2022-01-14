import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignupComponent } from "./signup/signup.component";


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'reset', component: ResetPasswordComponent},
    { path: 'signup', component: SignupComponent},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule{}