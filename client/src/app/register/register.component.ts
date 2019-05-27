import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import{ NgForm } from  '@angular/Forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService) { }
  showsuccessmsg:boolean;
  servererrormessage:string;
  ngOnInit() {
  }
onSubmit(form:NgForm)
{
  this.userservice.registeruser(form.value)
  .subscribe(
    res=>{
      this.showsuccessmsg=true;
    },
    err=>{
      this.servererrormessage="something worng"
    }
  )
}
}
