import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionModel } from 'src/app/public/components/login/models/permissions.model';
import { User } from 'src/app/public/components/login/models/user.model';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { ShoppingCarService } from 'src/app/public/components/shoping-cart/service/shoppingCar.service';



@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrder implements OnInit {

  public orderOk:boolean;
  public _delivery: boolean=false;
  public direction_delivery: string;
  public sessionUser: PermissionModel;
  public formDirection: any;

  constructor(
    public _service:ShoppingCarService, 
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

  public assembleOrder(){
    // let orderFinaly:OrdersRequest = UtilsShoppingCart.mapToOrdersInProgress(this._service.getOrderInProgress(), new OrdersRequest())
    // console.log(order)
    // order.count=1;
    // this.ordersInProgress.push(order)
  }

  public back(){
    this.router.navigate(['/shopping']);
  }

  public delivery(){
    this._delivery=true;
    this.formDirection.controls['direction'].setValue(this.sessionUser.isUser.direction);
  }

  public confirmUser(){
    this._storageSession.permissions$.subscribe(result => {
      if(result){
        this.sessionUser=result.isUser;
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
    // this.okPedido=true;
    // let p :any []=[];
    // this._service.pe.forEach(element=>
    //   p.push(element))
    // this.pedido=JSON.stringify(p);
    // this.pedido=this.pedido.replace(/["{}]+/g, " ");

    // this._service.pe.clear();
  }

  public initForm(){
    this.formDirection = this.formBuilder.group({
      direction : ["", [Validators.required, Validators.maxLength(100), Validators.minLength(10)]],
    });
  }

  public onSubmit(){
     this.direction_delivery=this.formDirection.get('direction').value;
  }

  public pickUp(){
    this.direction_delivery="Retiro en Local"
  }

  public onItemChange(value){
    this.formDirection.controls['direction'].setValue(value);
  }

}
