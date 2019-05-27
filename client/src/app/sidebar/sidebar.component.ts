import { Component, OnInit } from '@angular/core';
import { LoginService} from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.loginservice.deleteToken();
    this.router.navigateByUrl('/');
  }
}
