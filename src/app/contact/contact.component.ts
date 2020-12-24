import { Component } from "@angular/core";
import { ContactService } from './contact.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector:"contact",
    templateUrl:"./contact.component.html"
})
export class ContactComponent{
    public result:any;
    constructor(public service:ContactService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};