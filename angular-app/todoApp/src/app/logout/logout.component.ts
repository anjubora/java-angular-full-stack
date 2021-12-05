import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service copy';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticatedService:HardcodedAuthenticationService,private basicAuthenticatedService:BasicAuthenticationService ) { }

  ngOnInit(): void {
   // this.hardcodedAuthenticatedService.logout();
   this.basicAuthenticatedService.logout();
  }

}
