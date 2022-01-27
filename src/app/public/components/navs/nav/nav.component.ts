import { Component,  OnInit } from '@angular/core';
import { ShoppingCarService } from '../../shoping-cart/service/shoppingCar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public total:number=0;

  constructor(private _servicioShopingCar:ShoppingCarService) { 
    this._servicioShopingCar.totalSubject.subscribe(result =>{
      this.total=result;
    })
  }

  ngOnInit(): void {}

}
