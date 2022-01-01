import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Meal } from '../models/meals.model';

@Injectable({
  providedIn: 'root'
})
export class ListMealService {

  endpoint: string='meals';  

  constructor(private http: HttpClient) {
  }
  
  public getMelas(): Observable<Array<Meal>> {
    let url=environment.apiUrl + this.endpoint ;
    return this.http.get<Array<Meal>>(url);
  }

  public insert(m){
    let url=environment.apiUrl + this.endpoint ;
    return this.http.put(url, m);
  }
}
