import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateOrdersService } from 'src/app/shared/date/service/dateOrders.service';
import { Menu } from 'src/app/shared/menu/models/menus.model';
import { MenuService } from 'src/app/shared/menu/service/menus.service';
import { MenuResponse } from 'src/app/private-admin/menu/models/menus-response.model';
import { Meal } from 'src/app/shared/meals/models/meals.model';

@Component({
  selector: 'app-editMenu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public date:Date;
  public _newMenu:boolean;
  public _editMenu:Menu;
  public meals: Meal[];
  public action:string;

  constructor(
    private _serviceDate:DateOrdersService,
    private _service_menu:MenuService,
    private _toastr:ToastrService,
    ) {
      this._newMenu=false;
      this._editMenu=null;
      this.meals=[];
      this.action=null;
    }

  ngOnInit(): void {
  }

  public deleteIndex(i){
    this.meals.splice(i,1);
  }

  public cancelEdit(){
    this.edit(null);
  }

  public cancelAssignment(){
    this.meals=[];
  }

  public desactive(menu){
    menu.state='inactivo';
    this.edit(null);
    this._service_menu.desactive(menu).subscribe(res=>{
      if(res!=null){
        this._toastr.info("EL MENU SE EDITO CON EXITO");
      }
    })
  }

  public edit(eventMenu : Menu){
    this._editMenu=eventMenu;
    window.scroll(0,0);
  }

  public insert(){
    let m=new MenuResponse();
    m.state="activo";
    for(let i=0; i<this.meals.length; i++){
      m.meal.push(this.meals[i].id);
    }
    this._service_menu.insert(m).subscribe(res=>{
      console.log("res insert menu", res)
    })
  }

  public menuAlreyExist(date, id_meal):boolean{
    this._service_menu.menuAlreyExist(date, id_meal).subscribe(res=>{
      if(res!=null){
        console.log("res exist",res)
        return true;
      }
    })
    return false;
  }

  public new(){
    this._newMenu=this._newMenu==true ? false : true;
    this.action="new";
  }

  public pushMeals(m:Meal){
    if(this.verifyDuplicated(m.id) || this.menuAlreyExist(this.date, m.id) ){
        this._toastr.info("'MENU DUPLICADO'")
    }else{
      this._toastr.success("'OK'")
      // let mm=new Meal();
      // mm.id=m.id;
      // mm.tittle=m.tittle;
      this.meals.push(m);
    }
  }

  public setDate(date){
    let formatDate=this._serviceDate.convertToDate(date);
      this.date=formatDate;
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
