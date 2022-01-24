import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meals-admin',
  templateUrl: './meals-admin.component.html',
  styleUrls: ['./meals-admin.component.scss']
})
export class MealsAdminComponent implements OnInit {

  public action:string;

  constructor() { 
    this.action="edit";
  }

  ngOnInit(): void {
  }

}
