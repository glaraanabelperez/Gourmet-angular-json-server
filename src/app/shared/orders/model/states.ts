
export class States{

    statesEntregas=null;

    public setStatesToAdmin(){
        this.statesEntregas=["pending", "delivered"]
    }

    public setStatesToClient(){
        this.statesEntregas=["cencel"]
    }
}