import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PermissionModel } from 'src/app/public/components/login/models/permissions.model';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { OrdersResponse } from './model/orders-response.model';
import { States } from './model/states';
import { OrdersSharedService } from './service/orders.service';
import { NgxSpinnerService } from "ngx-spinner";


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
  public amount : number;
  public stateSelected: any;

  constructor(
    private _service_orders:OrdersSharedService, 
    public _storageSession:StorageService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) {
        this.setPermissionsAndStates();
      }

  ngOnInit(): void {
    this.spinnerFunction()
  }

  ngOnChanges(){
    this.initViewOrderbyUser();
  }

  public editAmount(id, n){
    this.spinnerFunction();
    var num=n.amount;
    this._service_orders.aditAmount(id, num).subscribe(
      (res)=>{
      this.initViewOrderbyUser();
      this.toastr.success('SE EDITO CON EXITO');
      },
      (error) =>{
        this.toastr.error('NO SE PUDO EDITAR LA CANTIDAD')
      });
   
  }

  public editState(id){
    this.spinnerFunction();
    if(this.stateSelected==null){
      this.toastr.error('ES NECESARIO SELECCIONAR UN ESTADO');
      return;
    }
    this._service_orders.editState(id, this.stateSelected).subscribe(
      (res)=>{
      this.initViewOrderbyUser();
      this.toastr.success('SE EDITO CON EXITO');
      },
      (error) =>{
        this.toastr.error('NO SE PUDO EDITAR EL ESTADO, ASEGURESE DE QUE HAYAN PASADO 24 HS LUEGO DE LA ENTREGA')
      });
  }

  public initViewOrderbyUser(){
    this.spinner.show();
    if(this.date!=null){
      if(this.sessionPermissions.isAdmin){
        this.get(this.date);
      }else{
        this.getByIdUser(this.date, this._storageSession.getCurrentUser().id)
      }
    }
    this.spinner.hide()
  }

  public get(date){
    this._service_orders.getOrders(date).subscribe(res=>{
      console.log("okok")
      if(res.length>0){
        this.orders=res.slice();
        console.log("ok", this.orders)
      }else{
        this.orders=null;
        this.toastr.info("NO HAY PEDIDOS PARA ESTA FECHA")
      }
    });
  }

  public getByIdUser(date, id_user){
    this._service_orders.getOrdersByIdUser(date, id_user).subscribe(
      (res)=>{
        this.orders=res.slice();
      },
      (error)=>{
        this.toastr.error("HUBO UN ERROR AL TRAER LOS DATOS")
      }
    );
  }

  public setDate(date:Date){
    this.get(date);
  }

  public setPermissionsAndStates(){
    this._storageSession.permissions$.subscribe(result => {
      this.sessionPermissions=result;
      })
      if(this.sessionPermissions.isAdmin){
        this.states.setStatesToAdmin()
      }else{
        this.states.setStatesToClient()
      }
  }

  spinnerFunction(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  

}
