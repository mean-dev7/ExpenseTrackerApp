import { Component, OnInit } from '@angular/core';
import { ExpenseService }from '../shared/expense.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../shared/login.service';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
id:string;
  constructor(private expense:ExpenseService,private loginservice:LoginService) { }
  showsuccessmsg:boolean;
  servererrormessage:string;
  ngOnInit() {
    
    console.log(sessionStorage.getItem('id'));
  
        
  }
loginbtn(form:NgForm){
  console.log(form.value);
  this.expense.addexpense(form.value)
  .subscribe(
    res=>{
      this.showsuccessmsg=true;
    },
    err=>{
      this.servererrormessage="something wrong in addeExpense"
    }
  )
}
}
