
export class LoginObject{

  private email: string;
  private password: string;

  constructor( object:any){
    this.email = object.email ? object.email : null;
    this.password = object.password ? object.password : null;
  }

  public getEmail(){
    return this.email;
  }

}