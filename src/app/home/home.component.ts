import { Component } from "@angular/core";
import { HomeService } from './home.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector:"home",
    templateUrl:"./home.component.html"
})
export class HomeComponent{
    public result:any;
    constructor(public service:HomeService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};