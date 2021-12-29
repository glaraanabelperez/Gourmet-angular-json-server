import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';

@Component({
  selector: 'app-editMenu',
  templateUrl: './edit-menus.component.html',
  styleUrls: ['./edit-menus.component.scss']
})
export class EditMenusComponent implements OnInit {

  // @Output() sendMenu: EventEmitter<Menu> = new EventEmitter();
  

  constructor(private _servicioShopingCar:ShoppingCarService) {}

  ngOnInit(): void {
  }


  public onClickMenu(eventMenu){
    console.log("holaaa")
    // this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

}
