import { Injectable } from '@angular/core';
import { Addcat } from './addcat.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddcatService {
  newaddcat:Addcat={
    name:'',
    amount:0,

  }


  constructor(private http:HttpClient) { }
  addcat(add:Addcat)
  {
    return this.http.post('http://localhost:3000/users/addcat/:id',add);
  }
 
}
