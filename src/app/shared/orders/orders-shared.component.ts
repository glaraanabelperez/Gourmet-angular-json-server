import { Component, Input, OnInit } from '@angular/core';
import { PermissionModel } from 'src/app/public/components/login/models/permissions.model';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { OrdersResponse } from './model/orders-response.model';
import { OrdersSharedService } from './service/orders.service';


@Component({
  selector: 'app-orders-shared',
  templateUrl: './orders-shared.component.html',
  styleUrls: ['./orders-shared.component.scss']
})
export class OrdersSharedComponent implements OnInit {
  
  @Input() date: Date;
  public orders: OrdersResponse[]=[];
  public sessionUser: PermissionModel;
  // public sessionAdmin:boolean;


  constructor(private _service_orders:OrdersSharedService, public _storageSession:StorageService) {
    this._storageSession.permissions$.subscribe(result => {
      this.sessionUser=result;
      console.log("aca", result)
      console.log("aca", this.sessionUser.isUser.id)
      // this.sessionAdmin=result.isAdmin;
      })
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.date!=null){
      if(this.sessionUser.isAdmin){
        this.get(this.date);
      }else{
        this.getByIdUser(this.date, this.sessionUser.isUser.id)
      }
    }
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

  public getByIdUser(date, id_user){
    this._service_orders.getOrdersByIdUser(date, id_user).subscribe(res=>{
      if(res.length>0){
        console.log(res)
        this.orders=res.slice();
      }else{
        this.orders=null;
      }
    });
  }

  public setDate(date:Date){
    this.get(date);
  }

}
