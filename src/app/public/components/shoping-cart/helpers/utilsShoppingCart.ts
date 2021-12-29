import { Menu } from "../../../../shared/menu/models/menus.model";
import { OrdersDto } from "../model/ordersDto.module";

export default  class UtilsShoppingCart{

  constructor() {}

  static mapMenuToOrdersDto(menus:Menu, ordersDto:OrdersDto):OrdersDto{

      ordersDto.menu=menus;
      ordersDto.count=0;
      console.log(ordersDto)
    
    return ordersDto;
  }


}