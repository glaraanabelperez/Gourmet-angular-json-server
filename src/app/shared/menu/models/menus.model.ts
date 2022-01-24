import { Meal } from "../../meals/models/meals.model";

export interface Menu{

     id:number;
     date:Date;
     state:string; 
     meal: Meal;

}