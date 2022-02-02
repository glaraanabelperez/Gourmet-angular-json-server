import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';
import { ShoppingCarService } from '../shoping-cart/service/shoppingCar.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {  

  public date:Date;
  public takeOrder:boolean=true;

  constructor( 
    private _servicioShopingCar:ShoppingCarService, 
    private _serviceDate:DateService, 
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
  }

  public onClickMenu(eventMenu){
    this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

  public setDate(date){
    // let formatDate=this._serviceDate.convertToDate(date)
    if(this._serviceDate.verifyingPastDate(date)){
      this.toastr.info('LOS PEDIDOS SON CON 24 HS DE ANTICIPACION')
    }else{
      this.date=date;
    }
  }

}
