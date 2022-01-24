
export class MenuResponse{

    id:number
    date:Date;
    state:string; 
    meal: number[];

    constructor(){
        this.id=null;
        this.date=null;
        this.state=null;
        this.meal=[];
    }
}