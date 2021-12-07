import { Company } from "./company.model";

export class Person{

    id:number;
    name:string;
    secondName:string;
    email:string;
    password:string;
    telephone:number;
    direction:string;
    company:Company;

    constructor(email, password){

    }

}