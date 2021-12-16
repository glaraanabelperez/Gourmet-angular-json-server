import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../models/session.model';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class StorageService{

  private localStorageService;
  private currentSession : Session = null;
  private permissions: any = new BehaviorSubject<any>(null);
  public permissions$ = this.permissions.asObservable();
  
  constructor() {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
    this.setPermissions();
  }


  public loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('session');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  public logout(){
    //desuscribir
    this.currentSession = null;
    this.localStorageService.clear();
    this.setPermissions();
  }

  public setCurrentSession(session: Session): void {  
    this.currentSession=session;
    this.localStorageService.setItem('session', JSON.stringify(this.currentSession));
    this.setPermissions();
  }

  private setPermissions(){
    let per={
      isUser: false,
      isAdmin:false
    }
    if(this.localStorageService.getItem('session')){
      let user=JSON.parse(this.localStorageService.getItem('session'));
      per.isUser= user.user,
      per.isAdmin=user.authAdmin
    }    
    this.permissions.next(per);    
  }


}