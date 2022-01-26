import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCarService } from './service/shoppingCar.service';


@Component({
  selector: 'app-shoppingCar',
  templateUrl: './shoppingCar.component.html',
  styleUrls: ['./shoppingCar.component.scss']
})
export class ShoppingCar implements OnInit {

  // pedidosTodos:Pedidos[];
  pedido:string;
  okPedido;
  
  constructor(public _service:ShoppingCarService,) {
    console.log(this._service.getOrderInProgress())
    this.okPedido=false;
    window.scroll(0,0)
  }

  ngOnInit(): void {}

  disertCount(c){
    this._service.disertCount(c);
  }
  sumarCantidad(c){
    this._service.sumarCantidad(c);
  }
  removeItemShoppingCart(c){
    this._service.removeItemShoppingCart(c);
  }

  finishOrder(){
    // this.okPedido=true;
    // let p :any []=[];
    // this._service.pe.forEach(element=>
    //   p.push(element))
    // this.pedido=JSON.stringify(p);
    // this.pedido=this.pedido.replace(/["{}]+/g, " ");

    // this._service.pe.clear();
  }

}
