import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddcatService } from '../shared/addcat.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private cat:AddcatService ) { }
  showsuccemsg:boolean;
  servererrormessage:string;

  ngOnInit() {
  }
  addcatbtn(form:NgForm){
    this.cat.addcat(form.value)
    .subscribe(
      res=>{
        this.showsuccemsg=true;
      },
      err=>{
        this.servererrormessage="somthing wrong in addcat"
      }
    )
  }

}
