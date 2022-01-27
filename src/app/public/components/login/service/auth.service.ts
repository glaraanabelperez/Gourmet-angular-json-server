import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { LoginObject } from '../models/loginObject.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  endpoint: string='users';

  constructor(private http: HttpClient) {
  
  }
  
  public login(user:LoginObject): Observable<User> {
    let data:string="?email=" + user.getEmail();
    let url=environment.apiUrl + this.endpoint + data;
    return this.http.get<User>(url);
  }

  public insertUser(user:User):Observable<any>{
    let url = environment.apiUrl + this.endpoint;
    return this.http.post(url , user);
  }

  public veryifyEmail(email:string):Observable<any>{
    let data:string="?email=" + email;
    let url=environment.apiUrl + this.endpoint + data;
    return this.http.get<any>(url);
  }
 

}