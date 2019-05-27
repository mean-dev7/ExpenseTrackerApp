import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { UserService } from '../shared/user.service';
import { LoginService } from '../shared/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private loginservice:LoginService,private userservice:UserService,private router:Router){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

    if(!this.loginservice.isLoggedIn)
    {
      
      this.loginservice.deleteToken();
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
 
 

  
}
