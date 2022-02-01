import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeneralStates } from 'src/app/modelState/statesMenus';
import { environment, environmentNet } from 'src/environments/environment';
import { MenuRequest } from '../models/menus-request.model';
import { Menu } from '../models/menus.model';
import UtilsMenusMap from '../utils/menuUtils';



@Injectable({
  providedIn: 'root'
})

export class MenuService{

endpoint: string='menus'; 
public reload: any = new BehaviorSubject<boolean>(false);
public reload$ = this.reload.asObservable();


  constructor(private http: HttpClient) {}

  public desactive(menu :Menu){
    menu.state=new GeneralStates().notAvailable;
    let menuRequest={
      state:menu.state
    }

    let url=environmentNet.apiUrl + this.endpoint  + "/" + (menu.id).toString();
    return this.http.put(url, menuRequest);
  }

  public getMenus(dateSelected:Date): Observable<Array<Menu>> {
    let date:string = "?date=" + this.setDateString(dateSelected);
    let url=environmentNet.apiUrl + this.endpoint + date;
    return this.http.get<Array<Menu>>(url);
  }

  public insert( m:Array<MenuRequest>){
    console.log(m)
    let url=environmentNet.apiUrl + this.endpoint ;
    return this.http.post(url, m);
  }

  public setDateString(date:Date):string{
    console.log("aaaaaaaa", date)
    let d=date.getUTCFullYear() + "-" + ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    return  d;
  }

  public reloadMenus(){
    this.reload.next(true);
  }

}