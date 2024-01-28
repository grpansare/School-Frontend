import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   url="http://localhost:8081/"
  constructor(private http:HttpClient) {

  }
 login(credentials:any){
  //generate token
  return this.http.post(`${this.url}loginuser`,credentials)


 }
 loginuser(username:any){
  localStorage.setItem("username",username)
}
isLoggedIn(){
 let username= localStorage.getItem("username")
 if(username==undefined || username==='' ||username==null){
  return false;
 }
 else{
  return true;
 }
}
//for logout user
logout(){
  localStorage.removeItem('username');
  return true;
}


getToken(){
  return localStorage.getItem("username");
}
  //calling server to generate token


}
