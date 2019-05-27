import { Injectable } from '@angular/core';
import { Admin } from '../shared/admin.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  newlogin:Admin={
    email:'',
    password:'',
  }
  admindetails:Admin[];
  constructor(private http:HttpClient) { }
  // setToken (token:string){
  //   localStorage.setItem('token',token);
  // }
  // getToken(){
  //   return localStorage.getItem('token');
  // }
 
  // deleteToken()
  // {
  //   return localStorage.removeItem('token');
  // }
  loginbtn(authcredential)
  {
    return this.http.post("http://localhost:3000/users/adminauthenticate",authcredential);
  }
  //  getpayload()
  // {
  //   var token=this.getToken();
  //   if(token)
  //   {
  //     var adminPayload=atob(token.split('.')[1]);
  //     if(adminPayload)
  //       {
  //         return JSON.parse(adminPayload)
  //       }
  //       else return null;
  //   }
  // }
  // isLoggedIn()
  // {
  //   var adminpayload=this.getpayload();
  //   if(adminpayload)
  //   {
  //     return adminpayload.exp>Date.now()/1000;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  displayadmin()
  {
    return this.http.get("http://localhost:3000/users/displayadmin")
  }
 
};


