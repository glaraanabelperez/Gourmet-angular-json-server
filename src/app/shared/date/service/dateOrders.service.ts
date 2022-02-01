import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DateService{
  
  public dateCurrent:Date;

  constructor() {
    this.dateCurrent=new Date()
    console.log(this.dateCurrent)
  }

  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    console.log("date seteada desde componente date", date)
    return date;
  }

  verifyingPastDate(dateSelected:Date):boolean{
    if(new Date() > dateSelected){
      return true;
    }
    return false;
  }



}