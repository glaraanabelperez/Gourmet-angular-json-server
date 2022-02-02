import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, environmentNet } from 'src/environments/environment';
import { DateService } from '../../date/service/dateOrders.service';
import { OrdersResponse } from '../model/orders-response.model';



@Injectable({
  providedIn: 'root'
})

export class OrdersSharedService{

endpoint: string='orders';  

  constructor(private http: HttpClient, private _date_service:DateService) {
  }

  public desactive(order){
    let id:string = "/" + (order.id).toString();
    let url=environment.apiUrl + this.endpoint + id;
    return this.http.put(url, order);
  }

  public editState(id, state):Observable<any>{
    let _state={
      state:state
    }
    let url=environmentNet.apiUrl + this.endpoint  + "/" + id;
    return this.http.post(url, _state);
  }

  public getOrders(dateSelected:Date): Observable<Array<OrdersResponse>> {
    let data:string = "?date=" + this._date_service.setDateString(dateSelected);
    let url=environmentNet.apiUrl + this.endpoint + data;
    return this.http.get<Array<OrdersResponse>>(url);
  }

  public getOrdersByIdUser(dateSelected:Date, id_user:number): Observable<Array<OrdersResponse>>{
    let date:string = "date=" + this._date_service.setDateString(dateSelected);
    let id:string = "?id=" + id_user;
    let url=environment.apiUrl + this.endpoint + id + "&" + date ;
    return this.http.get<Array<OrdersResponse>>(url);
  }

}