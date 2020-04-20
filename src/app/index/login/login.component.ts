import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

postData = {
  email: "",
  password: ""
}
errorText: string;
  constructor( public authSevice: AuthService, public router: Router) {
    this.errorText = '';
   }

  ngOnInit() {
  }
  loginAction(){
    if(this.postData.email && this.postData.password){
      //action and sessions storage
      this.errorText = '';
      if(this.authSevice.login(this.postData)){
       this.router.navigate([''])
      }
    }else{
      this.errorText = 'please give a valid Data';
    }
    console.log(this.postData);
  }
}
