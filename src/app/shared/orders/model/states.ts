
export class States{

    statesEntregas=null;

    public setStatesToAdmin(){
        this.statesEntregas=["pendiente", "entregado"]
    }

    public setStatesToClient(){
        this.statesEntregas=["Cancelado"]
    }
}