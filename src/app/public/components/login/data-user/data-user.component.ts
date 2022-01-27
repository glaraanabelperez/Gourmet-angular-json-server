import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.scss']
})
export class DataUserComponent implements OnInit {

  public editUser:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
