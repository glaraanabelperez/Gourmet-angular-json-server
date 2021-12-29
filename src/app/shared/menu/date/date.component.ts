import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { DateOrdersService } from './service/dateOrders.service';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar, private _serviceDate:DateOrdersService) {
    this.model = this.calendar.getToday();
    this.emitDate(this.model)
   }

  ngOnInit(): void {
  }

  emitDate(selectedDate){
    this._serviceDate.setDate(selectedDate);
  }
}
