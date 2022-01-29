import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/meals/models/meals.model';

@Component({
  selector: 'app-meals-admin',
  templateUrl: './meals-admin.component.html',
  styleUrls: ['./meals-admin.component.scss']
})
export class MealsAdminComponent implements OnInit {

  _reload: boolean;
  public action:string;
  public elementToEdit: Meal;

  constructor() { 
    this.action="edit";
  }

  ngOnInit(): void {
  }
  
  public setElementToEdit(meal:Meal){
    this.elementToEdit=meal;
  }

  public reload(r){
    this._reload=r;
  }

}
