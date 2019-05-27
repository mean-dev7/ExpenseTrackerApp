import { Injectable } from '@angular/core';
import{ Salary } from '../shared/salary.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalaryService {
newsalary:Salary={
  amount:0,
}
  constructor(private http:HttpClient) { }
  addsalary(salary:Salary){
    return this.http.post('http://localhost:3000/users/addsalary/:id',salary)
  }
}
