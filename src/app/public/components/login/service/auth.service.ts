import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment, environmentNet } from 'src/environments/environment';
import { LoginObject } from '../models/loginObject.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  endpoint: string='user';

  constructor(private http: HttpClient) {
  
  }
  
  public login(user:LoginObject): Observable<any> {
    let url=environmentNet.apiUrl + this.endpoint + "/login" ;
    return this.http.post(url, user);
  }

  public insertUser(user:User):Observable<any>{
    let url = environmentNet.apiUrl + this.endpoint;
    return this.http.post(url , user);
  }

  public editUser(user:User, id:number):Observable<any>{
    let data:string="/" + id;
    let url=environmentNet.apiUrl + this.endpoint + data;
    return this.http.put(url , user);
  }

  public veryifyEmail(email:string):Observable<any>{
    let data:string="?email=" + email;
    let url=environment.apiUrl + this.endpoint + data;
    return this.http.get<any>(url);
  }
 

}