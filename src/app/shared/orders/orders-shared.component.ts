import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PermissionModel } from 'src/app/public/components/login/models/permissions.model';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { OrdersResponse } from './model/orders-response.model';
import { States } from './model/states';
import { OrdersSharedService } from './service/orders.service';


@Component({
  selector: 'app-orders-shared',
  templateUrl: './orders-shared.component.html',
  styleUrls: ['./orders-shared.component.scss']
})
export class OrdersSharedComponent implements OnInit {
  
  @Input() date: Date;
  public orders: OrdersResponse[]=[];
  public sessionPermissions: PermissionModel;
  public states:States=new States();
  stateSelected: any=null;

  constructor(
    private _service_orders:OrdersSharedService, 
    public _storageSession:StorageService,
    private toastr: ToastrService,
    ) {
    this._storageSession.permissions$.subscribe(result => {
      this.sessionPermissions=result;
      })
      if(this.sessionPermissions.isAdmin){
        this.states.setStatesToAdmin()
      }else{
        this.states.setStatesToClient()
      }
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.initViewOrder();
  }


  public editState(id){
    if(this.stateSelected==null){
      this.toastr.error('ES NECESARIO SELECCIONAR UN ESTADO');
      return;
    }
    this._service_orders.editState(id, this.stateSelected).subscribe(res=>{
      this.initViewOrder();
      this.toastr.success('SE EDITO CON EXITO');
      },
      error =>{
        this.toastr.error('NO SE PUEDE EDITAR EL ELEMENTO')
      });
  }

  public initViewOrder(){
    if(this.date!=null){
      if(this.sessionPermissions.isAdmin){
        this.get(this.date);
      }else{
        this.getByIdUser(this.date, this._storageSession.getCurrentUser().id)
      }
    }
  }

  public get(date){
    this._service_orders.getOrders(date).subscribe(res=>{
      if(res.length>0){
        console.log("aca", res)
        this.orders=res.slice();
        console.log(this.orders)
      }else{
        this.orders=null;
        this.toastr.info("NO HAY PEDIDOS PARA ESTA FECHA")
      }
    });
  }

  public getByIdUser(date, id_user){
    this._service_orders.getOrdersByIdUser(date, id_user).subscribe(res=>{
      if(res.length>0){
        console.log(res)
        this.orders=res.slice();
      }else{
        this.orders=null;
      }
    });
  }

  public setDate(date:Date){
    this.get(date);
  }

}
