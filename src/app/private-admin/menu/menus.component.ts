import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DateOrdersService } from 'src/app/shared/date/service/dateOrders.service';
import { Meal } from 'src/app/private-admin/edit-meals/models/meals.model';
import { ListMealService } from 'src/app/private-admin/edit-meals/service/meal.service';
import { Menu } from 'src/app/shared/menu/models/menus.model';
import { MenuService } from 'src/app/shared/menu/service/menus.service';
import { ListMealsComponent } from 'src/app/private-admin/edit-meals/list-meals.component';

@Component({
  selector: 'app-editMenu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public date:Date;  
  public _showMeals:boolean=false;
  public menu:Menu=null;
  public meals: Meal[]=[];

  constructor( 
    private _serviceDate:DateOrdersService, 
    private _service_menu:MenuService, 
    private _toastr:ToastrService,
    ) {}

  ngOnInit(): void {
  }

  public deleteIndex(i){
    this.meals.splice(i,1);
  }

  public cancel(){
    this.editMenu(null);
  }

  public cancelMenu(){
    this.meals=[];
  }

  public desactive(menu){
    menu.state='inactivo';
    this.editMenu(null);
    this._service_menu.desactive(menu).subscribe(res=>{
      if(res!=null){
        this._toastr.info("EL MENU SE EDITO CON EXITO");
      }
    })
  }

  public editMenu(eventMenu : Menu){
    this.menu=eventMenu;
    window.scroll(0,0);
  }

  public insertMenu(){
   console.log(this.meals)
   //guardar con la fecha en bbdd
  }

  public pushMeals(m:Meal){
    if(this.verifyDuplicated(m.id)){
      this._toastr.info("'ESE PLATO YA FUE ASGNADO'")
    }else{
      this._toastr.success("'OK'")
      let mm=new Meal();
      mm.id=m.id;
      mm.tittle=m.tittle;
      console.log(mm)
      this.meals.push(m);
      console.log("ok",this.meals[0].tittle)

      
    }
  }

  public setDate(date){
    let formatDate=this._serviceDate.convertToDate(date);
      this.date=formatDate;
  }

  public showMeals(){
    this._showMeals=this._showMeals==true ? false : true;
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
