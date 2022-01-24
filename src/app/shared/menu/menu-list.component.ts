import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { DateOrdersService } from '../date/service/dateOrders.service';
import { Menu } from './models/menus.model';
import { MenuService } from './service/menus.service';

@Component({
  selector: 'app-menuList',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() date: Date;
  @Input() admin: boolean;

  @Output() _editMenu: EventEmitter<Menu> = new EventEmitter();
  
  public menus:Menu[]=null;
  public menusOk=false;
  // sessionAdmin: boolean;
  // sessionUser: any;
    
  constructor( 
    private _menusService:MenuService, 
    private toastr: ToastrService,
    public _storageSession:StorageService
    ) {}

  ngOnInit(): void {
    this.date=null;
    // this._storageSession.permissions$.subscribe(result => {
    //   this.sessionUser=result.isUser;
    //   this.sessionAdmin=result.isAdmin;
    //   })
  }

  ngOnChanges(){
    if(this.date!=null){
      this.getMenus(this.date);
    }
  }

  public getMenus(date:Date){
    this._menusService.getMenus(date).subscribe(res=>{
      if(res.length>0){
        this.menus=res.slice();
        console.log("menu", res)
      }else{
        this.menus=null;
        this.toastr.warning('NO HAY MENUS DISPONIBLES', 'SELECCIONE OTRA FECHA!');
      }
    });
  }

  public sendShoppingCart(menu :Menu){
    this._editMenu.emit(menu);
  }

}
