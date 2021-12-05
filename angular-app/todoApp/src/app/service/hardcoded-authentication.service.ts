import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username:string,password:string){
    if(username=="anju"&&password=="1234"){
      sessionStorage.setItem('authenticatedUser',username);
     return true;
       
    }else{
      return false;
    }

  }

  isUserLoggedIn(){
    if(sessionStorage.getItem('authenticatedUser')){
      return true;
    }else{
      return false;

    }
  }
  
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  createBasicAuthenticationHttpHeader(){
   let username='anju'
   let password='dummy'
   let basicAuthHeaderString='Basic '+window.btoa(username+":"+password);
   return basicAuthHeaderString;


  }
}
