import { Company } from "src/app/private-admin/customers/models/company.model";

export class User{

    id:number;
    email:string;
    password:string
    name:string;
    secondName:string;
    telephone:number;
    direction:string;
    state:string;
    company: Company;
}