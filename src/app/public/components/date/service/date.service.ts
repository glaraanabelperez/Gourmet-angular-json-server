import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../login/service/storage.service';



@Injectable({
  providedIn: 'root'
})

export class DateService{
  
  private date: any = new BehaviorSubject<any>(null);
  public date$ = this.date.asObservable();
  private sessionAdmin: boolean;

  constructor(private _serviceStorage:StorageService, private toastr: ToastrService) {
    this._serviceStorage.permissions$.subscribe(result => {
      this.sessionAdmin=result.isAdmin;
      });
  }
  
  setDate(dateSelected){
    let date=this.convertToDate(dateSelected)
    if(this.verifyingPastDateToString(new Date(),date)){
      if(this.sessionAdmin){
        this.date.next(date);
      }else{
        this.toastr.warning("Seleccione una fecha que no haya pasado!")
      }
    }

  }

  verifyingPastDateToString(today:Date, dateSelected:any):boolean{
    return today > dateSelected;
  }


  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    return date;
  }



}