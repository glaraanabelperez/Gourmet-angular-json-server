import { Menu } from "../../../../shared/menu/models/menus.model";
import { OrdersInProgress } from "../model/orders-in-progress.module";
import { OrdersRequest } from "../model/orders-request.module";

export default  class UtilsShoppingCart{

  constructor() {}

  static mapToOrdersRequest(o:OrdersInProgress, order:OrdersRequest):OrdersRequest{
    // order.id_menu 
    return order;
  }

  static mapToOrdersInProgress(menus:Menu, order:OrdersInProgress):OrdersInProgress{
    order.menu=menus;
    order.count=0;    
    return order;
  }


}