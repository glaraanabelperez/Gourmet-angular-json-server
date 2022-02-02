import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeneralStates } from 'src/app/modelState/statesMenus';
import { environment, environmentNet } from 'src/environments/environment';
import { DateService } from '../../date/service/dateOrders.service';
import { MenuRequest } from '../models/menus-request.model';
import { Menu } from '../models/menus.model';
import UtilsMenusMap from '../utils/menuUtils';



@Injectable({
  providedIn: 'root'
})

export class MenuService{

endpoint: string='menus'; 

  constructor(private http: HttpClient, private _serviceDate:DateService) {}

  public desactive(id_menu: number){
    let url=environmentNet.apiUrl + this.endpoint  + "/" + id_menu;
    return this.http.delete(url);
  }

  public getMenus(dateSelected:Date): Observable<Array<Menu>> {
    let date:string = "?date=" + this._serviceDate.setDateString(dateSelected);
    let url=environmentNet.apiUrl + this.endpoint + date;
    return this.http.get<Array<Menu>>(url);
  }

  public insert( m:Array<MenuRequest>){
    let url=environmentNet.apiUrl + this.endpoint ;
    return this.http.post(url, m);
  }

 


}