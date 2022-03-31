import { GeneralStates } from "src/app/modelState/statesMenus";
import { Meal } from "../../meals/models/meals.model";
import { MenuRequest } from "../models/menus-request.model";
import { Menu } from "../models/menus.model";

export default  class UtilsMenusMap{

  constructor() {}


  static mapToListMenusRequest(date:Date, meals:Meal[]):Array<MenuRequest>{

    let listMenus: Array<MenuRequest> =new Array<MenuRequest>();

    let state=new GeneralStates().available;
    let _date=this.setDateString(date);
    for(let i=0; i<meals.length; i++){
      let m=new MenuRequest();
      m.date=_date;
      m.state=state;
      m.idMeal=meals[i].id;
      listMenus.push(m)
    }
    return listMenus;
  }

  static setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    return  d;
  }


}