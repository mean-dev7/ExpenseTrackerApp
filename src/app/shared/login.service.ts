import { Injectable } from '@angular/core';
import { Login } from '../shared/login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  newlogin:Login={
    email:'',
    password:'',
  }
  constructor(private http:HttpClient) { }

 


  setToken (token:string){
    localStorage.setItem('token',token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  setid(id:string)
  {
    sessionStorage.setItem('id',id);
  }
  getid()
  {
    return sessionStorage.getItem('id');
  }
 
  deleteToken()
  {
    return localStorage.removeItem('token');
  }
  login(authcredential)
  {
    return this.http.post("Http://localhost:3000/users/authenticate",authcredential);

  }
  getUserId(token:string)
  {
    return this.http.get("http://localhost:3000/users/userprofile/:token");
  }

    getpayload()
  {
    var token=this.getToken();
    if(token)
    {
      var userPayload=atob(token.split('.')[1]);
      if(userPayload)
        {
          return JSON.parse(userPayload)
        }
        else return null;
    }
  }
  isLoggedIn()
  {
    var userpayload=this.getpayload();
    if(userpayload)
    {
      return userpayload.exp>Date.now()/1000;
    }
    else{
      return false;
    }
  }
};
