import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment, environmentNet } from 'src/environments/environment';
import { Meal } from '../models/meals.model';
import { MealsRequest } from '../models/mealsRequest';

@Injectable({
  providedIn: 'root'
})
export class ListMealService {

  endpoint: string='meals';  
  
  
  constructor(private http: HttpClient) {
  }

  public deleteMeals(id:number){
    let url=environmentNet.apiUrl + this.endpoint  +"/"+ id;
    return this.http.delete(url);
  }

  public editMeals(id, m: MealsRequest){
    let url=environmentNet.apiUrl + this.endpoint  +"/"+ id;

    return this.http.put(url, m);
  }

  public getMelas(): Observable<Array<Meal>> {
    let url=environmentNet.apiUrl + this.endpoint ;
    return this.http.get<Array<Meal>>(url);
  }

  public insert(m:MealsRequest){
    console.log(m)
    let url=environmentNet.apiUrl + this.endpoint ;
    return this.http.post(url, m);
  }

}
