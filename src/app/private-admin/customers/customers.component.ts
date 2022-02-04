import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomersResponse } from './models/clients-response.model';
import { CustomersService } from './service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers:CustomersResponse[]=[];

  constructor(
    private _serviceCustomers:CustomersService,
    private toastr: ToastrService,
    ) { 
    this.get();
  }

  ngOnInit(): void {
  }

  public get(){
    this._serviceCustomers.getCustomers().subscribe(
      (res)=>{    
        this.customers=res.slice();
      },
      (error)=>{    
        this.toastr.show("NO SE ECNUENTRAN LOS DATOS")
      }
    );
  }
}
