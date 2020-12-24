import { Component } from "@angular/core";
import { LogoutService } from './logout.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:"dashboard",
    templateUrl:"./dashboard.component.html",
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent{
    constructor(public service:LogoutService,
                public router:Router){}
    public logout():any{
        this.service.signout().subscribe((posRes)=>{
            if(posRes.logout === "success"){
                window.localStorage.removeItem("login_details");
                this.router.navigate(["/"]);
            }else{
                alert("Logout Fail");
            }
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};
