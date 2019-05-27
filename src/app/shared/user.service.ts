import { Injectable } from '@angular/core';
import { User,deleteuser } from './user.model';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newuser:User={
    fname:'',
    lname:'',
    email:'',
    pswd:'',
    cpswd:''

  }
  userdetails:User[];

  constructor(private http:HttpClient) { }
  registeruser(user:User)
  {
    return this.http.post('http://localhost:3000/users/createuser',user);
  }
  displayall(){
    return this.http.get("http://localhost:3000/users/display");
  }
  
  deleteuser()
  {
    return this.http.delete("http://localhost:3000/users/delete")
  }

}

