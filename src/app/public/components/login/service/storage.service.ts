import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../models/session.model';



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
//
  public getSession(){
    return this.currentSession;
  }

  public getPersmissions(){
    return this.permissions;
  }

  private loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('session');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  public logout(){
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
    if(this.currentSession!=null){
      let user=JSON.parse(this.localStorageService.getItem('session'));
      let newPermision={
        isUser: user.user,
        isAdmin:user.authAdmin
      }
      this.permissions.next(newPermision);  
    }
    
  }


}