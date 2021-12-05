import { HttpInterceptor ,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service copy';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})


export class HttpInterceptorBasicauthService implements HttpInterceptor{

  constructor(private basicAuthenticatedService:BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username="anju";
    // let password="dummy";
    // let basicAuthHeaderString='Basic '+window.btoa(username+":"+password);
    let basicAuthHeaderString= this.basicAuthenticatedService.getAuthenticatedToken();
    let username=this.basicAuthenticatedService.getAuthenticatedUser();

   
    if(basicAuthHeaderString && username){
      req=req.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      })
    }
    
    return next.handle(req);
  }

}
 
