import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateOrdersService } from '../date/service/dateOrders.service';
import { ShoppingCarService } from '../shoping-cart/service/shoppingCar.service';
import { Menu } from './models/menus.model';
import { MenuService } from './service/menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() sendMenu: EventEmitter<Menu> = new EventEmitter();
  // public menus:Menu[]=[];
  

  constructor(
    // private _menusService:MenuService, 
    // private _serviceDate:DateOrdersService, 
    private _servicioShopingCar:ShoppingCarService,
    // private toastr: ToastrService
    ) {
    // this._serviceDate.date$.subscribe(result => {
    //   if(result){
    //     this.getMenus(result);
    //   }
    // })
  }

  ngOnInit(): void {
  }

  // getMenus(date:any){
  //   this._menusService.getMenus(date).subscribe(res=>{
  //     if(res.length>0){
  //       this.menus=res.slice();
  //     }else{
  //       this.menus=null;
  //       const options= { positionClass:'toast-custom' };
  //       this.toastr.warning('No hay menus disponibles', 'Seleccione otra fecha!', options);
  //     }
  //   });
  // }

  // sendShoppingCart(menu){
  //   this._servicioShopingCar.setItemShoppingCart(menu);
  //   this.sendMenu.emit(menu);
  // }

  public onClickMenu(eventMenu){
    console.log("yhea", eventMenu)
    this._servicioShopingCar.setItemShoppingCart(eventMenu);
  }

}
