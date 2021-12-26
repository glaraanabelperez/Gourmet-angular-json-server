import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HelperConvertService{

  constructor() {}

  setDateString(date:Date):string{
    let d=date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + (date.getUTCDate());
    return  d;
  }


}