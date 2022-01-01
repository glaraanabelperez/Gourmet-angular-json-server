import { Meal } from "../../../private-admin/edit-meals/models/meals.model";

export class Menu{
    id:number
    date:Date;
    state:string; 
    meal: Meal;
}