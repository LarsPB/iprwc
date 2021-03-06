import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { UserModel } from "../models/user.model";
import { AuthData } from "./auth-data-model";


const BACKEND_URL = environment.apiUrl + '/user/';

@Injectable({ providedIn: "root" })
export class AuthService {
    user: UserModel;
    private isAuthenticated:boolean = false;
    private isAdmin: boolean = false;
    private token: string;
    private tokenTimer: any;
    private authStatusListener = new Subject<boolean>();
    private isAdminListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router){}

    getToken() {
        return this.token;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    getisAdminListener() {
        return this.isAdminListener.asObservable();
    }

    getIsAdmin():boolean {
        return this.isAdmin;
    }
    
    getIsAuthenticated():boolean {
        return this.isAuthenticated;
    }

    createUser(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post(BACKEND_URL + "signup", authData)
            .subscribe(response => {
                // console.log(response);
            });
    }


    reset(email: string) {
        // reset 
    }


    login(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post<{token: string, expiresIn:number}>(BACKEND_URL + "login", authData)
            .subscribe(response => {
                const token = response.token;
                this.token = token;
                if (token) {
                    const expiresInDuration = response.expiresIn;
                    this.setAuthTimer(expiresInDuration);
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    this.isAdminListener.next(false);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    this.saveAuthData(token, expirationDate);
                    this.user = this.getUser(token);
                    if(this.user.roles == "ADMIN") {
                        this.isAdmin = true;
                        this.isAdminListener.next(true);
                    }
                    this.router.navigate(['/']);
                }
                // console.log(response);
            });
    }

    logout() {
        this.token = "";
        this.isAuthenticated = false;
        this.isAdmin = false;
        this.authStatusListener.next(false);
        this.isAdminListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }



    private getUser(token: string):UserModel{
        return JSON.parse(atob(token.split(".")[1])) as UserModel;
    }

    autoAuthUser() {
        const authInformation:any = this.getAuthData();
        if(!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }





    private setAuthTimer(duration:number) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000)
    }

    private saveAuthData(token: string, expirationDate: Date) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    }


    private clearAuthData() {
        localStorage.removeItem("token")
        localStorage.removeItem("expiration")
    }

    private getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        if(!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        }
    }


}