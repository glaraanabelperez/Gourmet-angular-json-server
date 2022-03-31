import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { OrdersRequest } from 'src/app/public/components/shoping-cart/model/orders-request.module';
import { environmentNet } from 'src/environments/environment';
import { DateService } from '../../date/service/dateOrders.service';
import { OrdersResponse } from '../model/orders-response.model';



@Injectable({
  providedIn: 'root'
})

export class OrdersSharedService{

endpoint: string='orders';  

  constructor(
    private http: HttpClient, 
    private _date_service:DateService,
    private _serviceStorage: StorageService) {
  }

  public desactive(order){
    let id:string = "/" + (order.id).toString();
    let url=environmentNet.apiUrl + this.endpoint + id;
    return this.http.put(url, order);
  }

  public aditAmount(id:number, amount:number):Observable<any>{
    let url=environmentNet.apiUrl + this.endpoint + "/updateCount";
    let amountRequest={
      id:id,
      count:amount,
    }
    return this.http.put(url, amountRequest );
  }

  public editState(id, state:string):Observable<any>{
    let url=environmentNet.apiUrl + this.endpoint  + "/" + id ;
    let stateRequest={
      idUser:this._serviceStorage.getCurrentUser().id,
      state:state
    }
    return this.http.put(url, stateRequest );
  }

  public getOrders(dateSelected:Date): Observable<Array<OrdersResponse>> {
    let data:string = "?date=" + this._date_service.setDateString(dateSelected);
    let url=environmentNet.apiUrl + this.endpoint + data;
    return this.http.get<Array<OrdersResponse>>(url);
  }

  public getOrdersByIdUser(dateSelected:Date, id_user:number): Observable<Array<OrdersResponse>>{
    let date:string = "?date=" + this._date_service.setDateString(dateSelected);
    let id:string = "/" + id_user;
    let url=environmentNet.apiUrl + this.endpoint + id + date ;
    return this.http.get<Array<OrdersResponse>>(url);
  }

  public insertOrders( listOrder:Array<OrdersRequest>){
    let url=environmentNet.apiUrl + this.endpoint ;
    return this.http.post(url, listOrder);
  }
}