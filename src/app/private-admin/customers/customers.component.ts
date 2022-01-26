import { Component, OnInit } from '@angular/core';
import { CustomersResponse } from './models/clients.model';
import { CustomersService } from './service/meal.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers:CustomersResponse[]=[];

  constructor(private _serviceCustomers:CustomersService) { 
  }

  ngOnInit(): void {
  }
  public get(){
    this._serviceCustomers.getCustomers().subscribe(res=>{
      if(res.length>0){
        console.log(res)
        this.customers=res.slice();
      }else{
        this.customers=null;
      }
    });
  }}
