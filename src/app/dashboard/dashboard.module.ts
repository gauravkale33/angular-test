import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TokenModule } from '../token/token.module';
import { LogoutService } from './logout.service';
@NgModule({
    declarations:[DashboardComponent],
    imports:[
        CommonModule,
        HttpClientModule,
        TokenModule,
        RouterModule.forChild([{path:"",component:DashboardComponent,children:[
            {path:"about",loadChildren:()=>import("../about/about.module").then(obj=> obj.AboutModule)},
            {path:"home",loadChildren:()=>import("../home/home.module").then(obj=> obj.HomeModule)},
            {path:"contact",loadChildren:()=>import("../contact/contact.module").then(obj=> obj.ContactModule)}
        ]}])
    ],
    providers:[LogoutService],
    exports:[DashboardComponent]
})
export class DashboardModule{}