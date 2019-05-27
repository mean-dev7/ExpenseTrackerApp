import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent implements OnInit{
  constructor(private loginservice:LoginService,private router:Router){}
  ngOnInit(): void {

    this.loginservice.deleteToken();
    this.router.navigateByUrl('/');

//    throw new Error("Method not implemented.");
  }

}