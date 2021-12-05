import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const AUTHENTICATED_USER="authenticatedUser";
export const TOKEN="token" 

@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }


  authenticate(username:string,password:string){

    
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader(username,password);
    let headers=new HttpHeaders({
      Authorization: basicAuthHeaderString

    })
 
     return this.http.get<BasicAuthenticateBean>(`${API_URL}/basicauth`,{headers}).pipe(map(data=>{
       sessionStorage.setItem(AUTHENTICATED_USER,username);
       sessionStorage.setItem(TOKEN,basicAuthHeaderString);
       return data
     }))

  }

  authenticateJwtAuthentication(username:string,password:string){

    let body={
      "username":username,
      "password":password
  
  }
 
     return this.http.post<JwtToken>(`${API_URL}/authenticate`,body).pipe(map(data=>{
       sessionStorage.setItem(AUTHENTICATED_USER,username);
       sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
       return data
     }))

  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    if(sessionStorage.getItem(AUTHENTICATED_USER)){
      return true;
    }else{
      return false;

    }
  }
  
  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }



  createBasicAuthenticationHttpHeader(username:string,password:string){

   let basicAuthHeaderString='Basic '+window.btoa(username+":"+password);
   return basicAuthHeaderString;
  }
}

export class BasicAuthenticateBean{

  constructor(public message:String){}

}
export class JwtToken{
  constructor(public token:String){}
}