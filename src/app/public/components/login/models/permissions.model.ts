import { User } from "./user.model";

export interface PermissionModel{
    isUser:User;
    isAdmin:boolean;
}