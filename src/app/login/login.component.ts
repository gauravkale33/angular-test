import { Component } from "@angular/core";
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
export class LoginComponent{
    public uname:any;
    public upwd:any;
    constructor(public service:LoginService,
                public router:Router){}
    public login(data:any):any{
        this.service.signin(data).subscribe((posRes)=>{
            if(posRes.login === "success"){
                window.localStorage.setItem("login_details",JSON.stringify(posRes));
                this.router.navigate(["/dashboard"]);
            }
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};