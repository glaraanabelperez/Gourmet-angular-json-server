import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';

@Component({
  selector: 'app-editMenu',
  templateUrl: './editMenus.component.html',
  styleUrls: ['./editMenus.component.scss']
})
export class EditMenusComponent implements OnInit {

  // @Output() sendMenu: EventEmitter<Menu> = new EventEmitter();
  

  constructor(private _servicioShopingCar:ShoppingCarService) {}

  ngOnInit(): void {
  }


  public onClickMenu(eventMenu){
    this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

}
