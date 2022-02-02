import { Menu } from "../../../../shared/menu/models/menus.model";
import { OrdersInProgress } from "../model/orders-in-progress.module";
import { OrdersRequest } from "../model/orders-request.module";

export default  class UtilsShoppingCart{

  constructor() {}

  static mapToOrdersRequest( delivery_direction:string,  id_user:number, orderInProgress:Array<OrdersInProgress>):Array <OrdersRequest>{
    
    let listOrder=  new Array<OrdersRequest>();

    orderInProgress.forEach(element => {
      
      let order=new OrdersRequest();
      order.idUser=id_user,
      order.idMenu=element.menu.id,
      order.amount=element.count,
      order.deliveryAdress=delivery_direction

      listOrder.push(order);

    });
    return listOrder;
  }

  static mapToOrdersInProgress(menus:Menu, order:OrdersInProgress):OrdersInProgress{
    order.menu=menus;
    order.count=0;    
    return order;
  }


}