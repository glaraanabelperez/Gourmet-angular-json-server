import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { Menu } from '../../../../shared/menu/models/menus.model';
import UtilsShoppingCart from '../helpers/utilsShoppingCart';
import { OrdersInProgress } from '../model/orders-in-progress.module';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCarService{

  total=0;
  totalSubject:Subject <any> = new  Subject <any>();
  public ordersInProgress:Array<any>=[];


  constructor(private toastr: ToastrService) {}

  public contador(n:number){
    this.total+=n;
    this.totalSubject.next(this.total);
  }
  
  public checkItemInOrder(id):boolean{
    for(let i=0; i<this.ordersInProgress.length; i++){
      if(this.ordersInProgress[i].menu.id==id){
          return true;
        }
    }
    return false;
  }

  public disertCount(index){
    this.ordersInProgress[index].count-=1;
    this.contador(-1);  
  }

  public getOrderInProgress(){
    const orders = this.ordersInProgress;
    return orders;
  }

  public removeItemShoppingCart(index){
    let cant_borrar=this.ordersInProgress[index].count;
    this.ordersInProgress.splice(index,1);
    this.contador(-cant_borrar);  
  }

  public showTotal(){
    return this.total;
  }

  public setItemShoppingCart(menu:Menu){
    if(this.checkItemInOrder(menu.id)){
      this.toastr.show('ESTE PRODUCTO YA ESTA EN EL CARRITO!');
    }else{
      let order:OrdersInProgress = UtilsShoppingCart.mapToOrdersInProgress(menu, new OrdersInProgress())
      console.log(order)
      order.count=1;
      this.ordersInProgress.push(order)
      this.contador(+1);  
    }
  }

  public sumarCantidad(index){
    this.ordersInProgress[index].count+=1;
    this.contador(+1);  
  }

  

}