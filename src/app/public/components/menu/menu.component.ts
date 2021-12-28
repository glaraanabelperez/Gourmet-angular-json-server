import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCarService } from '../shoping-cart/service/shoppingCar.service';
import { Menu } from './models/menus.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {  

  constructor(private _servicioShopingCar:ShoppingCarService) {}

  ngOnInit(): void {
  }


  public onClickMenu(eventMenu){
    this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

}
