import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateOrdersService } from './date/service/dateOrders.service';
import { Menu } from './models/menus.model';
import { MenuService } from './service/menus.service';

@Component({
  selector: 'app-menuList',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() sendMenu: EventEmitter<Menu> = new EventEmitter();
  public menus:Menu[]=null;
  public menusOk=false;
  public date:any;

  constructor(
    private _menusService:MenuService, 
    private _serviceDate:DateOrdersService, 
    private toastr: ToastrService
    ) {
    this._serviceDate.date$.subscribe(result => {
      if(result){
        this.date=result;
        this.getMenus(result);
      }
    })
  }

  ngOnInit(): void {}

  getMenus(date:any){
    this._menusService.getMenus(date).subscribe(res=>{
      if(res.length>0){
        this.menus=res.slice();
      }else{
        this.menus=null;
        const options= { positionClass:'toast-custom' };
        this.toastr.warning('No hay menus disponibles', 'Seleccione otra fecha!', options);
      }
    });
  }

  sendShoppingCart(menu){
    this.sendMenu.emit(menu);
  }

}
