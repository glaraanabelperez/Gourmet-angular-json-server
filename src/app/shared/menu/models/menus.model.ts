import { Meal } from "../../meals/models/meals.model";

export interface Menu{
     
     id:number;
     idMeal:number;
     date:Date;
     state:string; 
     Meal: Meal;

}