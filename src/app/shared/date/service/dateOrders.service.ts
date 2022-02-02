import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DateService{
  
  public dateCurrent:Date;
  public reload: any = new BehaviorSubject<boolean>(false);
  public reload$ = this.reload.asObservable();

  constructor() {
    this.dateCurrent=new Date();
    console.log("currentDate", this.dateCurrent)
  }

  public verifyingPastDate(dateSelected:Date):boolean{
    if(new Date() > dateSelected){
      return true;
    }
    return false;
  }
  
  public reloadMenus(){
    this.reload.next(true);
  }

  public setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    return  d;
  }


}