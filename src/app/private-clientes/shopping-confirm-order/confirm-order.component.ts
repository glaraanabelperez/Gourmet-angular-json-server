import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionModel } from 'src/app/public/components/login/models/permissions.model';
import { User } from 'src/app/public/components/login/models/user.model';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import UtilsShoppingCart from 'src/app/public/components/shoping-cart/helpers/utilsShoppingCart';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';
import { DateService } from 'src/app/shared/date/service/dateOrders.service';
import { OrdersSharedService } from 'src/app/shared/orders/service/orders.service';



@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrder implements OnInit {

  public sessionUser: PermissionModel;
  public user:User;
  // public orderOk:boolean;
  public _delivery: boolean=false;
  public direction_delivery: string;
  public formDirection: any;

  constructor(
    public _service:ShoppingCarService, 
    private _serviceOrders:OrdersSharedService,
    private _service_date:DateService,
    private _storageSession:StorageService,
    private readonly formBuilder : FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    ) {
      this.confirmUser();
    }

  ngOnInit(): void {
    this.initForm();
  }

  get f(){return this.formDirection.controls;}

  public back(){
    this.router.navigate(['/shopping']);
  }

  public delivery(){
    this._delivery=true;
    this.formDirection.controls['direction'].setValue(this._storageSession.getCurrentUser().direction);
    this.direction_delivery=this.formDirection.get('direction').value;
  }

  public confirmUser(){
    this._storageSession.permissions$.subscribe(result => {
      if(result){
        this.sessionUser=result.isUser;
        this.user=this._storageSession.getCurrentUser();
      }else{
        this.router.navigate(['/login']);
        this.toastr.info("SE DEBE REGISTRAR PARA HACER EL PEDIDO")
      }
    })
  }

  public cleanForm(){
    this._delivery=false;
    this.formDirection.reset();
    this.direction_delivery=null;
  }

  public finishOrder(){

    if(this.direction_delivery==null || this.direction_delivery==""){
      this.toastr.error("LA DIRECCION NO PUEDE ESTAR VACIA");
    }else{
      let listOrder=UtilsShoppingCart.mapToOrdersRequest(this.direction_delivery, this._storageSession.getCurrentUser().id, this._service.ordersInProgress);
      this._serviceOrders.insertOrders(listOrder).subscribe(
        res=>{
          this.toastr.success("GRACIAS PRO SU COMPREA, AGUARDE A SU PEDIDO");
          this._service.ordersInProgress=[];
          this._service.reloadTotal(0);
          this.router.navigate(['/meals']);
        },
        error =>{
          this.toastr.error('NO SE PUDO INSERTAR EL PEDIDO, ASEGURESE QUE NO TENGA UN PEDIDO CON ESTE PRODUCTO EN LA SECCION DE SUS PEDIDOS')
          }
        );
    }
    
  }

  public initForm(){
    this.formDirection = this.formBuilder.group({
      direction : ["", [Validators.required, Validators.maxLength(100), Validators.minLength(10)]],
    });
  }

  public pickUp(){
    this.direction_delivery="Retiro en Local"
  }

  public onItemChange(value){
    this.formDirection.controls['direction'].setValue(value);
    this.direction_delivery=this.formDirection.get('direction').value;
  }

}
