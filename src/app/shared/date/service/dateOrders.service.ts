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

  // anticipatedDates(dateSelected):boolean{
  //   if(this.verifyingPastDate(new Date(),dateSelected)){
  //     this.toastr.info('Los pedidos solo pueden realizarce con 24hs de anticipacion')
  //     return false;
  //   }else{
  //       return true;
  //     }
  // }

  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    return date;
  }

  // setDate(dateSelected){
  //   let date=this.convertToDate(dateSelected);
  //   this.date.next(date);
  // }

  verifyingPastDate(dateSelected:Date):boolean{
    if(new Date() > dateSelected){
      return true;
    }
    return false;
  }



}