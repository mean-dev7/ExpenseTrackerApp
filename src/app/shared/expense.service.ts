import { Injectable } from '@angular/core';
import { Expense } from './expense.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  newexpense:Expense={
    // name:'',

    month:'',
    amount:0,
    

  }
  
  expensedetails:Expense[];
  constructor(private http:HttpClient) { }
  addexpense(add:Expense)
  {
    return this.http.post('http://localhost:3000/users/addexpense/:id',add);
  }
  expensedetailsall(){
    return this.http.get("http://localhost:3000/users/displayexpense/:id");
  }
  expenseprofile(){
    return this.http.get("http://localhost:3000/users/userprofile");
  }


}
