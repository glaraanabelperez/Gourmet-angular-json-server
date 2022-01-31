import { Meal } from "../../meals/models/meals.model";

export class Menu{
     
     id:number;
     idMeal:number;
     date:Date;
     state:string; 
     Meal: Meal;

}