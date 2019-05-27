import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/shared/admin.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private loginservice:AdminService,private router:Router) { }

  ngOnInit() {
  //   if(
  //     !this.loginservice.isLoggedIn()
  //   {
  //     this.router.navigateByUrl('/adminLogin');
  //   }
  //   else{
  //    // console.log(this.loginservice.getToken().toString());
  // //   }
  this.loginservice.displayadmin().subscribe((res)=>{
    this.loginservice.admindetails=res as Admin[]
    console.log(res as Admin[])
    
    
  })
   }
loginbtn(form:NgForm){
  this.loginservice.loginbtn(form.value).subscribe((res)=>{
   // this.loginservice.setToken(res['token']);
    this.router.navigateByUrl('/admin')
  })
  }

}
