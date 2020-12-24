import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: "", loadChildren: () => import("./login/login.module").then(obj => obj.LoginModule) },
      { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(obj => obj.DashboardModule) }
    ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
