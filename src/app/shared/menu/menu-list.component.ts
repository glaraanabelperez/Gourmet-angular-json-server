import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
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
  
  public menus:Menu[]=null;
  sessionAdmin:boolean;
    
  constructor( 
    private _menusService:MenuService, 
    private toastr: ToastrService,
    public _storageSession:StorageService
    ) {
      this.date=null;
      this._storageSession.permissions$.subscribe(result => {
        if(result){
          this.sessionAdmin=result.isAdmin;
        }
      })
    }

  ngOnInit(): void {}

  ngOnChanges(){
    if(this.date!=null){
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
    console.log(menu)
    this._editMenu.emit(menu);
  }

}
