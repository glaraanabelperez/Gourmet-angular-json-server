import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { HttpClient } from '@angular/common/http';
import { ISession } from '../models/Isession';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements ISession{

  endpoint: string='login';
  session: Person;

  constructor(private http: HttpClient, ) {
  }

  getSession():Person {
    return this.session;
  }

  login(email:string, password:string): Observable<Person> {
    let user = new Person(email, password);
    let url=environment.apiPrueba + this.endpoint;
    return this.http.post<Person>(url, user);
    // return this.http.get<any>(url);
  }


  logout(){
    this.session=null;
  }

  setSession(data:Person) {
    this.session=data;
  }



  
  

}