import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../shared/expense.service';
import { Expense } from '../shared/expense.model';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  month = [];
  amount = [];
  chart = [];
  constructor(private httpClient: HttpClient,private expenseservice:ExpenseService,private router:Router,private loginservice:LoginService)
   { }


  ngOnInit() {
    if(!this.loginservice.getToken())
    {
      this.router.navigateByUrl('/');
    }
    else
    {
    this.expenseservice.expensedetailsall().subscribe((res: Expense[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.amount.push(y.amount);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.amount,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
  }

 

}
