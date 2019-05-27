import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit() {
    if(!this.loginservice.isLoggedIn())
    {
      this.router.navigateByUrl('/');
    }
    else{
     // console.log(this.loginservice.getToken().toString());
    }
  }
loginbtn(form:NgForm){
  this.loginservice.login(form.value).subscribe((res)=>{
    this.loginservice.setToken(res['token']);
     this.loginservice.setid(res['id']);
     this.router.navigate(['/home'],{"queryParams":res['id']});
    
    
  
    
  })
}
}
