import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, environmentNet } from 'src/environments/environment';
import { CustomersResponse } from '../models/clients-response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  endpoint: string='user';  

  constructor(private http: HttpClient) {
  }
  
  public getCustomers(): Observable<Array<CustomersResponse>> {
    let url=environmentNet.apiUrl + this.endpoint ;
    return this.http.get<Array<CustomersResponse>>(url);
  }

}
