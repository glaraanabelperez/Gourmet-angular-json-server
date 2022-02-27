import { User} from "src/app/public/components/login/models/user.model";
import { Menu } from "src/app/shared/menu/models/menus.model";

export class OrdersResponse{
    Menus:Menu;
    User:User;
    stateOrder:string;
    deliveryAdress:string;
    amount:number;
}