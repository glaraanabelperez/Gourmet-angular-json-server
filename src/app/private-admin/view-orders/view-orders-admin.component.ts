import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';


@Component({
  selector: 'app-orders-admin',
  templateUrl: './view-orders-admin.component.html',
  styleUrls: ['./view-orders-admin.component.scss']
})

export class ViewOrdersAdminComponent implements OnInit {

  public date:Date;

  constructor(private _serviceDate:DateService) 
  {}

  ngOnInit(): void {
    this.setDate(this._serviceDate.dateCurrent)
  }

  public setDate(date){
    this.date=date;
  }

}
