import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit {
userInformation;
  constructor( public authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserData().then(data =>{
      console.log(data)
      this.userInformation = data;
    });
  }

}
