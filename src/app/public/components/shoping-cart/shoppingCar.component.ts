import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from './service/shoppingCar.service';


@Component({
  selector: 'app-shoppingCar',
  templateUrl: './shoppingCar.component.html',
  styleUrls: ['./shoppingCar.component.scss']
})
export class ShoppingCar implements OnInit {

  pedido:string;
  okPedido=false;
  // total: any;
  
  constructor(public _service:ShoppingCarService) {
  }

  ngOnInit(): void {
    // this._service.totalSubject.subscribe(result =>{
    //   this.total=result;
    // })
  }

  disertCount(c){
    this._service.disertCount(c);
  }
  sumarCantidad(c){
    this._service.sumarCantidad(c);
  }
  removeItemShoppingCart(c){
    this._service.removeItemShoppingCart(c);
  }

}
