import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepicker, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { DateService } from './service/dateOrders.service';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Output() dateSelected:EventEmitter<Date> = new EventEmitter();
  
  public model: NgbDateStruct;

  constructor(private calendar: NgbCalendar, private _serviceDate:DateService) {
    this.model = this.calendar.getToday();
    this._serviceDate.dateCurrent=new Date();
  }

  ngOnInit(): void {
  }

  public emitDate(d){
    let _d=this.convertToDate(d)
    this.dateSelected.emit(_d);
    this._serviceDate.dateCurrent=_d;
  }

  convertToDate(dateSelected:any){
    let date=new Date(dateSelected.year +"/"+ (dateSelected.month) +"/"+ dateSelected.day);
    return date;
  }
}
