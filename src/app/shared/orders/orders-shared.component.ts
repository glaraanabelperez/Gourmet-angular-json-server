import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  public orders: OrdersResponse[];
  public sessionPermissions: PermissionModel;
  public states:States=new States();
  public amount : number;
  public stateSelected: any;
  isLoadingResults: boolean;
  isAdmin: boolean=false;

  constructor(
    private _service_orders:OrdersSharedService, 
    public _storageSession:StorageService,
    private toastr: ToastrService,
    ) {
        this.orders=[];
        this.setPermissionsAndStates();
      }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.initViewOrderbyUser();
  }

  public editAmount(id, n){
    this.isLoadingResults=true;
    var num=n.amount;
    this._service_orders.aditAmount(id, num).subscribe(
      (res)=>{
        this.isLoadingResults=false;
      this.initViewOrderbyUser();
      this.toastr.success('SE EDITO CON EXITO');
      },
      (error) =>{
        this.isLoadingResults=false;
        this.toastr.error('ERROR DE SERVIDOR')
      });
   
  }
  
  public delete(id:number){
    this._service_orders.delete(id).subscribe(
      (res)=>{     
      this.toastr.success('SE ELIMINNO CON EXITO');
      this.isLoadingResults=false;
      },
      (error) =>{
        this.toastr.info('AGUARDE A LA FECHA PARA EDITAR EL ESTADO', error.messagge)
        this.isLoadingResults=false;
      });
  }

  public editState(id :number, state:string){
    this.isLoadingResults=true;
    
    if(state.toLowerCase()=="pending"){
      if(this.sessionPermissions.isAdmin){
        this.stateSelected="delivered"
      }
    }
    this._service_orders.editState(id, this.stateSelected).subscribe(
      (res)=>{
      this.initViewOrderbyUser();
      this.toastr.success('SE EDITO CON EXITO');
      this.isLoadingResults=false;
      },
      (error) =>{
        if(this.sessionPermissions.isAdmin){
          this.toastr.info('AGUARDE A LA FECHA PARA EDITAR EL ESTADO')
        }
        this.isLoadingResults=false;
      });
  }

  public initViewOrderbyUser(){
    if(this.date!=null){
      if(this.sessionPermissions.isAdmin){
        this.get(this.date);
      }else{
        this.getByIdUser(this.date, this._storageSession.getCurrentUser().id)
      }
    }
  }

  public get(date){
    this.isLoadingResults=true;
    this._service_orders.getOrders(date).subscribe(res=>{
          if(res.length>0){
            this.orders=res.slice(); 
            this.isLoadingResults=false;
    
          }else{
            this.orders=[];
            this.toastr.info('SIN PEDIDOS');
            this.isLoadingResults=false;
          }    
    });
  }

  public getByIdUser(date, id_user){
    this.isLoadingResults=true;
    this._service_orders.getOrdersByIdUser(date, id_user).subscribe( res=>{
      if(res.length>0){
        this.orders=res.slice(); 
        this.isLoadingResults=false;

      }else{
        this.orders=[];
        this.toastr.info('SIN PEDIDOS');
        this.isLoadingResults=false;
      }    
    });
  }

  public setDate(date:Date){
    this.get(date);
  }

  public setPermissionsAndStates(){
    this._storageSession.permissions$.subscribe(result => {
      this.sessionPermissions=result;
      })
      if(this.sessionPermissions.isAdmin){
        this.isAdmin=true;
      }
  }

  

}
