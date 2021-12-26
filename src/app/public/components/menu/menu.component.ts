import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateService } from '../date/service/date.service';
import { ShoppingCarService } from '../shoping-cart/service/shoppingCar.service';
import { Menu } from './models/menus.model';
import { MenuService } from './service/menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menus:Menu[]=[];
  
  constructor(
    private _menusService:MenuService, 
    private _serviceDate:DateService, 
    private _servicioShopingCar:ShoppingCarService,
    private toastr: ToastrService

    ) {
    this._serviceDate.date$.subscribe(result => {
      console.log("aca 3", result)
      if(result){
        this.getMenus(result);
      }
    })
  }

  ngOnInit(): void {

  }

  getMenus(date:any){
    this._menusService.getMenus(date).subscribe(res=>{
      if(res.length>0){
        this.menus=res.slice();
        console.log(this.menus)
      }else{
        this.menus=null;
        const options= { positionClass:'toast-custom' };
        this.toastr.warning('No hay menus dispoibles', 'Seleccione otra fecha!', options);
      }
    });
  }


}
