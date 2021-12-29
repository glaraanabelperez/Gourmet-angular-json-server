import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Meals } from '../models/meals.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  endpoint: string='menus';  

  constructor(private http: HttpClient) {
  }
  
  getMenus(): Observable<Array<Meals>> {
    let url=environment.apiUrl + this.endpoint ;
    return this.http.get<Array<Meals>>(url);
  }
}
