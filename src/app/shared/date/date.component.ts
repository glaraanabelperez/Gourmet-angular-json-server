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
    this.emitDate(this.model)
  }

  ngOnInit(): void {}

  public emitDate(d){
    this.dateSelected.emit(d);
  }
}
