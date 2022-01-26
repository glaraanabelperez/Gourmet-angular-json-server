import { Menu } from "../../../../shared/menu/models/menus.model";
import { OrdersResponse } from "../model/orders-response.module";

export default  class UtilsShoppingCart{

  constructor() {}

  static mapMenuToOrdersResponse(menus:Menu, oderResponse:OrdersResponse):OrdersResponse{
    oderResponse.menu=menus;
    oderResponse.count=0;    
    return oderResponse;
  }


}