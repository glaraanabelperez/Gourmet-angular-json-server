
export class LoginObject{

  private email: string;
  private pass: number;

  constructor( email:string, pass:number){
    this.email = email;
    this.pass = pass;
  }

  public getEmail(){
    return this.email;
  }

}