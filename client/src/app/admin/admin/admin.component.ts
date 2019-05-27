import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { AdminService } from '../../shared/admin.service';
import { User } from '../../shared/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userservice:UserService,private adminservice:AdminService,private router:Router) { }

  ngOnInit() {
    // if(!this.adminservice.getToken())
    // {
    //   this.router.navigateByUrl('/adminLogin');
    // }
    // else
    // {
    //   console.log(this.adminservice.getToken());
    // this.router.navigateByUrl('/adminLogin');
    this.userservice.displayall().subscribe((res)=>{

      this.userservice.userdetails=res as User[];
    })
    
  }
  onDelete(user:User){
    this.userservice.deleteuser();
  };
}


