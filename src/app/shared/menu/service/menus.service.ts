import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuResponse } from '../../../private-admin/menu/models/menus-response.model';
import { Menu } from '../models/menus.model';



@Injectable({
  providedIn: 'root'
})

export class MenuService{

endpoint: string='menus';  

  constructor(private http: HttpClient) {
  }

  public desactive(menu :Menu){
    let id:string = "/" + (menu.id).toString();
    let url=environment.apiUrl + this.endpoint + id;
    return this.http.put(url, menu);
  }

  public getMenus(dateSelected:Date): Observable<Array<Menu>> {
    let date:string = "?date=" + this.setDateString(dateSelected);
       console.log( dateSelected )

    let url=environment.apiUrl + this.endpoint + date;
    console.log( url )

    return this.http.get<Array<Menu>>(url);
  }

  public insert(m:MenuResponse){
    let url=environment.apiUrl + this.endpoint ;
    return this.http.put(url, m);
  }

  public setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + (date.getUTCDate());
    return  d;
  }

  public menuAlreyExist(dateSelected:Date, meal_id): Observable<Menu> {
    let date:string = "?date=" + this.setDateString(dateSelected);
    let meals_id:string = "?meal?id=" + meal_id.toString();
    let url=environment.apiUrl + this.endpoint + date +  meals_id;
    console.log("url", url)
    return this.http.get<Menu>(url);
  }

}