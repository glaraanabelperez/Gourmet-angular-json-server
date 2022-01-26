import { User } from "src/app/public/components/login/models/user.model";
import { Menu } from "src/app/shared/menu/models/menus.model";

export class Orders{
    menu:Menu;
    user:User;
    stateOrder:string;
    deliveryAdress:string;
    count:number;
}