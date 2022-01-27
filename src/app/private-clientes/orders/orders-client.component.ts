import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';


@Component({
  selector: 'app-orders-client',
  templateUrl: './orders-client.component.html',
  styleUrls: ['./orders-client.component.scss']
})
export class OrdersClientComponent implements OnInit {

  public date:Date;

  constructor(private _serviceDate:DateService) {}

  ngOnInit(): void {}

  public setDate(date){
    let formatDate=this._serviceDate.convertToDate(date);
    this.date=formatDate;
  }

}
