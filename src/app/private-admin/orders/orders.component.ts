import { Component, OnInit } from '@angular/core';
import { Orders } from './model/orders.model';
import { OrdersService } from './service/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  orders: Orders[]=[];

  constructor(private _service_orders:OrdersService) {}

  ngOnInit(): void {
  }

  public get(date){
    this._service_orders.getOrders(date).subscribe(res=>{
      if(res.length>0){
        console.log(res)
        this.orders=res.slice();
      }else{
        this.orders=null;
      }
    });
  }


}
