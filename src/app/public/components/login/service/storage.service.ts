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

  public getCurrentSession(): Session{
    return this.currentSession;
  }

  public getCurrentUser(): User{
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
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
      this.permissions.next(this.setObjectPermission(true, user.authAdmin));
    }else{
      this.permissions.next(this.setObjectPermission(false, false ));
    }
  }

  private setObjectPermission(user:boolean, admin:boolean):any{
    let newPermision:any={
      isUser:user,
      isAdmin:admin
     }
     return newPermision
  }


}