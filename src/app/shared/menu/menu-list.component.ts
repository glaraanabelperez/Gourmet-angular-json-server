import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { DateService } from '../date/service/dateOrders.service';
import { Menu } from './models/menus.model';
import { MenuService } from './service/menus.service';

@Component({
  selector: 'app-menuList',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() date: Date;
  @Input() takeOrder: boolean;
  @Output() _editMenu: EventEmitter<Menu> = new EventEmitter();
  
  public menus:Menu[];
  sessionAdmin:boolean;
    
  constructor( 
    private _menusService:MenuService, 
    private __serviceDate: DateService,
    private toastr: ToastrService,
    public _storageSession:StorageService
    ) {
      this.date=null;
      this.menus=null;
      this.suscripcionAdmin();
      this.suscripcionReload();
    }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.date!=null){
      console.log(this.date)
      this.getMenus(this.date);
    }
  }

  public getMenus(date:Date){
    this._menusService.getMenus(date).subscribe(res=>{
      if(res.length>0){
        this.menus=res.slice();
      }else{
        this.menus=null;
        this.toastr.warning('NO HAY MENUS DISPONIBLES', 'SELECCIONE OTRA FECHA!');
      }
    });
  }

  public send(menu :Menu){
    this._editMenu.emit(menu);
  }

  public suscripcionAdmin(){
    this._storageSession.permissions$.subscribe(result => {
      if(result){
        this.sessionAdmin=result.isAdmin;
      }
    })
  }

  public suscripcionReload(){
    this.__serviceDate.reload$.subscribe(result => {
      if(result){
        this.date=this.__serviceDate.dateCurrent
        this.getMenus(this.date);
      }
    })
  }

}
