import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice:AdminService,private router:Router) { }

  ngOnInit() { 
    
  }
  logout()
  {
    // this.loginservice.deleteToken();
    this.router.navigateByUrl('/adminLogin');
  }
}
