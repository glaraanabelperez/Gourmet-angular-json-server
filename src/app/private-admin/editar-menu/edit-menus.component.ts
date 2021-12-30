import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';
import { DateOrdersService } from 'src/app/shared/date/service/dateOrders.service';
import { Menu } from 'src/app/shared/menu/models/menus.model';
import { MenuService } from 'src/app/shared/menu/service/menus.service';

@Component({
  selector: 'app-editMenu',
  templateUrl: './edit-menus.component.html',
  styleUrls: ['./edit-menus.component.scss']
})
export class EditMenusComponent implements OnInit {

  public date:Date;  
  public editContent:boolean;
  public menu:Menu;

  constructor( private _serviceDate:DateOrdersService, private _service_menu:MenuService, private _toastr:ToastrService) {}

  ngOnInit(): void {
  }

  public desactivarMenu(menu){
    menu.state='inactivo';
    this.onClickMenu(null);
    this._service_menu.desactivarMenu(menu).subscribe(res=>{
      if(res!=null){
        this._toastr.info("EL MENU SE EDITO CON EXITO");
      }
    })
  }

  public onClickMenu(eventMenu : Menu){
    this.editContent= this.editContent==true? this.editContent=false : true;
    this.menu=eventMenu;
  }

  public setDate(date){
    let formatDate=this._serviceDate.convertToDate(date);
      this.date=formatDate;
  }

}
