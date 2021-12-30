import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';
import { DateOrdersService } from 'src/app/shared/date/service/dateOrders.service';

@Component({
  selector: 'app-editMenu',
  templateUrl: './edit-menus.component.html',
  styleUrls: ['./edit-menus.component.scss']
})
export class EditMenusComponent implements OnInit {
  date: any;

  // @Output() sendMenu: EventEmitter<Menu> = new EventEmitter();
  

  constructor(
    private _servicioShopingCar:ShoppingCarService,     
    private _serviceDate:DateOrdersService, 
    ) {
    this._serviceDate.date$.subscribe(result => {
      console.log("result de editMenu", result)
      if(result){
        this.date=result;
      }
    })
    console.log("result de editMenu", this.date)

  }

  ngOnInit(): void {
  }


  public onClickMenu(eventMenu){
    console.log("holaaa")
    // this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

}
