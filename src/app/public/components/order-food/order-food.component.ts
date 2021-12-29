import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCarService } from '../shoping-cart/service/shoppingCar.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {  

  constructor(private _servicioShopingCar:ShoppingCarService) {}

  ngOnInit(): void {
  }


  public onClickMenu(eventMenu){
    this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

}
