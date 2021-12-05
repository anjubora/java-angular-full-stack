import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service copy';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";
  invalidLogin:Boolean=false;

  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService,
      private basicAuthenticationService:BasicAuthenticationService)
    { }
  

  ngOnInit(): void {
  }

  handleLogin(){
    console.log("login");
    console.log(this.username+" "+this.password);
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
       
    }else{
      this.invalidLogin=true;
        
    }
  }

  handleLoginByBasicAuth(){
     this.basicAuthenticationService.authenticate(this.username,this.password).subscribe((res)=>{
       console.log(res);
       this.router.navigate(['welcome',this.username]);


     },(error)=>{
       console.log(error);
       this.invalidLogin=true;
     })
  }

  handleLoginByJwtAuth(){
    this.basicAuthenticationService.authenticateJwtAuthentication(this.username,this.password).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['welcome',this.username]);


    },(error)=>{
      console.log(error);
      this.invalidLogin=true;
    })
 }

}
