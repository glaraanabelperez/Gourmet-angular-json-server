import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../login/service/storage.service';



@Injectable({
  providedIn: 'root'
})

export class DateOrdersService{
  
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
      this.toastr.warning('Los pedidos solo se pueden realizar con un dia de anticipacion', 'Seleccione otra fecha!')
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