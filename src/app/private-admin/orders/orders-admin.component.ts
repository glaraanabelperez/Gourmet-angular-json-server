import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';


@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.scss']
})

export class OrdersAdminComponent implements OnInit {

  public date:Date;

  constructor(private _serviceDate:DateService) 
  {}

  ngOnInit(): void {
  }

  public setDate(date){
    let formatDate=this._serviceDate.convertToDate(date);
    this.date=formatDate;
  }

}
