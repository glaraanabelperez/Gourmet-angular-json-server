import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DateOrdersService{
  
  private date: any = new BehaviorSubject<any>(null);
  public date$ = this.date.asObservable();

  constructor(private toastr: ToastrService) {}
  
  setDate(dateSelected){
    let date=this.convertToDate(dateSelected)
    if(this.verifyingPastDateToString(new Date(),date)){
      this.toastr.info('Los pedidos solo pueden realizarce con 24hs de anticipacion')
    }else{
        this.date.next(date);
      }
    }

  verifyingPastDateToString(today:Date, dateSelected:any):boolean{
    if(today > dateSelected){
      return true;
    }
    return false;
  }


  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    return date;
  }



}