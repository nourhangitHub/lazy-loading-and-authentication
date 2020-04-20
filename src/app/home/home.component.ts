import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }
  logoutAction(){
   if(this.authservice.logout()){
    this.router.navigate(['login']) 
   }
  }
}
