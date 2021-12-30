import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DateOrdersService{
  
  private dateAdmin: any = new BehaviorSubject<any>(null);
  public dateAdmin$ = this.dateAdmin.asObservable();

  constructor() {
  }
  
  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    return date;
  }

  setDate(dateSelected){
    let date=this.convertToDate(dateSelected)
    this.dateAdmin.next(date);
  }





}