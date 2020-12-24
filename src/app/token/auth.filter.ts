import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthFilter {
  constructor(public service: TokenService) { }
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url == "http://localhost:8080/login") {
      return handler.handle(req);
    } else {
      const req1 = req.clone({
        setHeaders: {
          token: this.service.getToken()
        }
      });
      return handler.handle(req1);
    }
  };
};
