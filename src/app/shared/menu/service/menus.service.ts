import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menus.model';



@Injectable({
  providedIn: 'root'
})

export class MenuService{

endpoint: string='menus';  

  constructor(private http: HttpClient) {
  }
  
  getMenus(dateSelected:Date): Observable<Array<Menu>> {
    let date:string = "?date=" + this.setDateString(dateSelected);
    let url=environment.apiUrl + this.endpoint + date;
    return this.http.get<Array<Menu>>(url);
  }

  setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + (date.getUTCDate());
    return  d;
  }

}