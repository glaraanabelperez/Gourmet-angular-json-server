import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, environmentNet } from 'src/environments/environment';
import { OrdersResponse } from '../model/orders-response.model';



@Injectable({
  providedIn: 'root'
})

export class OrdersSharedService{

endpoint: string='orders';  

  constructor(private http: HttpClient) {
  }

  public desactive(order){
    let id:string = "/" + (order.id).toString();
    let url=environment.apiUrl + this.endpoint + id;
    return this.http.put(url, order);
  }

  public editState(id, state):Observable<any>{
    let _state={
      id_user:id,
      state:state
    }
    let id_:string = "/" + (id).toString();
    let url=environmentNet.apiUrl + this.endpoint  + id_
    return this.http.put(url, _state);
  }

  public getOrders(dateSelected:Date): Observable<Array<OrdersResponse>> {
    // let data:string = "?menus.date=" + "'"+this.setDateString(dateSelected)+"'";
    let data:string = "?date=" + this.setDateString(dateSelected);
    let url=environmentNet.apiUrl + this.endpoint + data;
    return this.http.get<Array<OrdersResponse>>(url);
  }

  public getOrdersByIdUser(dateSelected:Date, id_user:number): Observable<Array<OrdersResponse>>{
    let date:string = "date=" + this.setDateString(dateSelected);
    let id:string = "?id=" + id_user;
    let url=environment.apiUrl + this.endpoint + id + "&" + date ;
    return this.http.get<Array<OrdersResponse>>(url);
  }

  public setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + (date.getUTCDate());
    return  d;
  }
}