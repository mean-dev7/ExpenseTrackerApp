import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalaryService } from '../shared/salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  constructor(private salary:SalaryService) { }
showsuccessmsg:boolean;
servererrormessage:string;
  ngOnInit() {
  }
salarybtn(form:NgForm){
  this.salary.addsalary(form.value)
  .subscribe(
    res=>{
      this.showsuccessmsg=true;
    },
    err=>{
      this.servererrormessage="something wrong in addsalary"
    }
  )
}
}
