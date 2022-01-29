import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';
import { Menu } from 'src/app/shared/menu/models/menus.model';
import { MenuService } from 'src/app/shared/menu/service/menus.service';
import { Meal } from 'src/app/shared/meals/models/meals.model';
import { MenuRequest } from 'src/app/shared/menu/models/menus-request.model';

@Component({
  selector: 'app-editMenu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public date:Date;
  public admin:boolean=true;
  public _newMenu:boolean=false;
  public action:string=null;

  public _editMenu:Menu=null;
  public meals: Meal[]=[];

  constructor(
    private _serviceDate:DateService,
    private _service_menu:MenuService,
    private _toastr:ToastrService,
    ) {}

  ngOnInit(): void {
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

  public deleteMenu(menu){
    menu.state='inactivo';
    this.editMenu(null);
    this._service_menu.desactive(menu).subscribe(res=>{
      if(res!=null){
        this._toastr.info("EL MENU SE EDITO CON EXITO");
      }
    })
  }

  public editMenu(eventMenu : Menu){
    this._editMenu=eventMenu;
    window.scroll(0,0);
  }

  public insertNewMenu(){
    let m=new MenuRequest();
    m.state="activo";
    m.meal=[];
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

  public btnNewMenu(){
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
