import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateOrdersService } from 'src/app/shared/date/service/dateOrders.service';
import { MenuService } from 'src/app/shared/menu/service/menus.service';
import { ShoppingCarService } from '../shoping-cart/service/shoppingCar.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {  

  public date:Date;
  public admin:boolean;

  constructor( private _servicioShopingCar:ShoppingCarService, private _serviceDate:DateOrdersService, private toastr: ToastrService
    ) {
      this.admin=false;
    }

  ngOnInit(): void {
    console.log("aca")
  }

  public onClickMenu(eventMenu){
    this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

  public setDate(date){
    let formatDate=this._serviceDate.convertToDate(date)
    if(this._serviceDate.verifyingPastDate(formatDate)){
      this.toastr.info('LOS PEDIDOS SON CON 24 HS DE ANTICIPACION')
    }else{
      this.date=formatDate;
    }
  }

}
