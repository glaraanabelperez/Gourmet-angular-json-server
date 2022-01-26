import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DateService{
  
  private date: any = new BehaviorSubject<any>(null);
  public date$ = this.date.asObservable();

  constructor() {}

  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    return date;
  }

  verifyingPastDate(dateSelected:Date):boolean{
    if(new Date() > dateSelected){
      return true;
    }
    return false;
  }



}