import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orders } from '../model/orders.model';



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

  public getOrders(dateSelected:Date): Observable<Array<Orders>> {
    let date:string = "?date=" + this.setDateString(dateSelected);
    let url=environment.apiUrl + this.endpoint + date;
    return this.http.get<Array<Orders>>(url);
  }

  public getOrdersByIdUser(dateSelected:Date, id_user:number): Observable<Array<Orders>>{
    let date:string = "?date=" + this.setDateString(dateSelected);
    let id:string = "?id=" + id_user;
    let url=environment.apiUrl + this.endpoint + date + "&" + id;
    return this.http.get<Array<Orders>>(url);
  }

  public setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + (date.getUTCDate());
    return  d;
  }
}