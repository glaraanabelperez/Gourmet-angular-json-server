import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService{

  private carrito: any = new BehaviorSubject<any>(null);
  public carrito$ = this.carrito.asObservable();
  
  constructor() {
  }

  
}