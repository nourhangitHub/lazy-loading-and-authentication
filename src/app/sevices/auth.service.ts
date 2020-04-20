import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

isAuthenticated(): boolean {
  const userData = sessionStorage.getItem("userData");
  if(userData && userData.length > 0){
    return true;
  }else{
    return false;
  }
}  

async getUserData(){
  const userData = await sessionStorage.getItem("userData");
  return JSON.parse(userData);
}

async login(postDta){
  //login actions
  const responseData = {
    name: " nourhan samir",
    id: "123",
    token:"546477388399"
  }
 await sessionStorage.setItem("userData",JSON.stringify(responseData));
  return true;
}

signup(postData){
  //signup action
}

async logout(){
  //logout action
  await sessionStorage.removeItem("userData");
  await sessionStorage.clear();
  return true;
}

}
