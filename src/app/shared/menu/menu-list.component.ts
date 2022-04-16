import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  isLoadingResults: boolean;
    
  constructor( 
    private _menusService:MenuService, 
    private __serviceDate: DateService,
    private toastr: ToastrService,
    public _storageSession:StorageService
    ) {       
      this.menus=[];
      this.suscripcionAdmin();
      // this.suscripcionReload()
    }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.date!=null){
      if(this.__serviceDate.verifyingPastDate(this.date)){
        this.toastr.info('LOS PEDIDOS SON CON 24 HS DE ANTICIPACION')
        this.menus=[];
      }else{
      this.getMenus(this.date);
    }
  }
}

  public getMenus(date:Date){
    this.isLoadingResults=true;
    this._menusService.getMenus(date).subscribe(
      res=>{
        this.isLoadingResults=false;
        this.menus=res.slice();     
      },
      error=>{
        this.menus=[];
        this.isLoadingResults=false;
        this.toastr.warning('NO HAY MENUS DISPONIBLES');
      }
    );
  }

  public send(menu :Menu){
    this._editMenu.emit(menu);
  }

   suscripcionAdmin(){
    this._storageSession.permissions$.subscribe(result => {
      if(result){
        this.sessionAdmin=result.isAdmin;
      }
    })
  }

  public suscripcionReload(){
    this.__serviceDate.reload$.subscribe(
      result => {
        this.date=this.__serviceDate.dateCurrent
        this.getMenus(this.date);   
    })
  }

}
