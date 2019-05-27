import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private userservice:UserService)
   { }

  ngOnInit() {
    this.userservice.displayall().subscribe((res)=>{
      this.userservice.userdetails=res as User[];
    })
  }

}
