import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menus.model';
import { HelperConvertService } from 'src/app/helpers/helperConvert.service';



@Injectable({
  providedIn: 'root'
})

export class MenuService{

endpoint: string='menus';  

  constructor(private http: HttpClient, private _servcieHelperConvert:HelperConvertService) {
  }
  
  getMenus(dateSelected:Date): Observable<Array<Menu>> {

    let date:string = "?date=" + this._servcieHelperConvert.setDateString(dateSelected);
    let url=environment.apiUrl + this.endpoint + date;
    return this.http.get<Array<Menu>>(url);
  }

}