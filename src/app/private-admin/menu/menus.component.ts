import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';
import { Menu } from 'src/app/shared/menu/models/menus.model';
import { MenuService } from 'src/app/shared/menu/service/menus.service';
import { Meal } from 'src/app/shared/meals/models/meals.model';
import { MenuRequest } from 'src/app/shared/menu/models/menus-request.model';
import { GeneralStates } from 'src/app/modelState/statesMenus';
import UtilsMenusMap from 'src/app/shared/menu/utils/menuUtils';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editMenu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public date;
  public admin:boolean=true;
  public _newMenu:boolean=false;
  public action:string=null;

  public _editMenu:Menu=null;
  public meals: Meal[]=[];
  isLoadingResults=false;
  constructor(
    private _service_date:DateService,
    private _service_menu:MenuService,
    private _toastr:ToastrService,
    ) {
    }

  ngOnInit(): void {
    // this.date=new Date();
    this.setDate(new Date());
  }

  public deleteIndexMeals(i){
    this.meals.splice(i,1);
  }

  public cancelDeleteMenu(){
    this.editMenu(null);
  }

  public cancelAssignMenu(){
    this.meals=[];
  }

  public deleteMenu(id_menu){
    this.editMenu(null);
    this.isLoadingResults=true;
    this._service_menu.desactive(id_menu).subscribe(
      res=>{
        this.isLoadingResults=false;
        this._toastr.info("EL MENU SE ELIMINO CON EXITO");
        this._service_date.reloadMenus();
      },
      error=>{
          this.isLoadingResults=false;
          this._toastr.info("ERROR EN EL SERVIDOR");
      });
  }

  public editMenu(eventMenu : Menu){
    this._editMenu=eventMenu;
    window.scroll(0,0);
  }

  public insertNewMenu(){
    this.isLoadingResults=true;
    let list=UtilsMenusMap.mapToListMenusRequest(this.date, this.meals)
    this._service_menu.insert(list).subscribe(
      res=>{
        this.isLoadingResults=false;
        this._toastr.success("MENU INGRESADO");
        this._service_date.reloadMenus();
        this.cancelAssignMenu();
        this._newMenu=false;
    },
    error =>{
      this.isLoadingResults=true;
      this._toastr.error('NO SE PUDO INSERTAR EL MENU')
      }
    );
    
  }

  public btnNewMenu(){
    this._newMenu=this._newMenu==true ? false : true;
    this.action="new";
  }

  public pushMeals(m:Meal){
    if( this.verifyDuplicated(m.id) ){
        this._toastr.info("'MENU DUPLICADO'")
    }else{
      this._toastr.success("'OK'")
      this.meals.push(m);
    }
  }

  public setDate(date){
    this.date=date;
  }

  public verifyDuplicated(m_id):boolean{
    for(let i=0; i<this.meals.length; i++){
      if(m_id==this.meals[i].id){
        return true;
      }
    }
    return false;
  }


}
