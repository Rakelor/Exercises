import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  cart = new Subject

  constructor() { }

  temp:any = []

  add(item){
    console.log(item.name)
    this.temp.push(item);
    this.cart.next(this.temp);
  }

  getCart(){
    return this.cart
  }
}
