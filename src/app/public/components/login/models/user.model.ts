import { Company } from "src/app/private-admin/customers/models/company.model";

export class User{

    id:number;
    email:string;
    pass:string
    name:string;
    lastName:string;
    phone:number;
    direction:string;
    state:string;
    idCompany: number;
}
