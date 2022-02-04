import { User } from "./user.model";

export  class Session{

    // private token: string;
    public user: User;
    public authAdmin:boolean=false;

    constructor(user:User){
        this.user=user;
        this.setAuthAdmin();
    }
    
    public getAuthAdmin():boolean{
        return this.authAdmin;
    }

    public getUser():User{
         return this.user;
     }

    private setAuthAdmin(){
        if(this.user.id==1){
            this.authAdmin=true;
        }
    }

}