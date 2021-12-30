import { Meals } from "../../meals/models/meals.model";

export class Menu{
    id:number
    date:Date;
    state:string; 
    meal: Meals;
}