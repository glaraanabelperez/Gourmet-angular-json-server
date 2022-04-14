import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionModel } from 'src/app/public/components/login/models/permissions.model';
import { User } from 'src/app/public/components/login/models/user.model';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import UtilsShoppingCart from 'src/app/public/components/shoping-cart/helpers/utilsShoppingCart';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';
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
  isLoadingResults: boolean;
  public formOrder : FormGroup;

  constructor(
    public _service:ShoppingCarService, 
    private _serviceOrders:OrdersSharedService,
    private _storageSession:StorageService,
    private readonly formBuilder : FormBuilder,
    private router:Router,
    private toastr: ToastrService,

    ) {
      this.confirmUser();
      this.formOrder = this.formBuilder.group({
        direction : ["", [Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
         observation : ["", [Validators.required, Validators.maxLength(100)]],
       });
    }

  ngOnInit(): void {

  }

  get f(){return this.formOrder.controls;}

  public back(){
    this.router.navigate(['/shopping']);
  }

  public delivery(){
    this._delivery=true;
    this.formOrder.controls['direction'].setValue(this._storageSession.getCurrentUser().direction);
    this.direction_delivery=this.formOrder.get('direction').value;
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
    this.formOrder.reset();
    this.direction_delivery=null;
  }

  public finishOrder(){
    if(this.direction_delivery==null || this.direction_delivery==""){
      this.toastr.error("LA DIRECCION NO PUEDE ESTAR VACIA");
    }else{
      this.isLoadingResults=true;
      let listOrder=UtilsShoppingCart.mapToOrdersRequest(
        this.direction_delivery, 
        this._storageSession.getCurrentUser().id, 
        this._service.ordersInProgress,
        this.formOrder.get('direction').value
        );
      this._serviceOrders.insertOrders(listOrder).subscribe(
        (res)=>{
          this.isLoadingResults=false;
          this.toastr.success("GRACIAS PRO SU COMPREA, AGUARDE A SU PEDIDO");
          this._service.vaciarCarrito();
          this.router.navigate(['/orders-client']);
        },
        (error) =>{
          this.isLoadingResults=false;
          this._service.vaciarCarrito();
          this.router.navigate(['/orders']);
          this.toastr.error('PEDIDO EXISTENTE O FECHA INCORRECTA')
          }
        );
    }
    
  }

  public pickUp(){
    this.direction_delivery="Retiro en Local"
  }

  public onItemChange(value){
    this.formOrder.controls['direction'].setValue(value);
    this.direction_delivery=this.formOrder.get('direction').value;
  }

}

