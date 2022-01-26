import { Menu } from "src/app/shared/menu/models/menus.model";
import { User } from "../../login/models/user.model";

export class OrderResponse{
    id_order:number;
    menu:Menu;
    user:User;
    count:number;
    state:string; 
    deliveryAdress:string;
}