import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersResponse } from '../models/clients.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  endpoint: string='customers';  

  constructor(private http: HttpClient) {
  }
  
  public getCustomers(): Observable<Array<CustomersResponse>> {
    let url=environment.apiUrl + this.endpoint ;
    return this.http.get<Array<CustomersResponse>>(url);
  }

}
