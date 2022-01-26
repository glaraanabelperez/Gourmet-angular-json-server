import { Company } from "./company.model";

export class CustomersResponse{

    id:number;
    userName:string;
    secondName:string;
    email:string;
    telephone:number;
    direction:string;
    estado: string;
    company:Company;
}