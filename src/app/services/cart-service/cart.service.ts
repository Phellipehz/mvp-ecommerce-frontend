import {Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {OrderItem } from 'src/app/classes/order-item';
import { Order } from 'src/app/classes/order';
import { Product } from 'src/app/classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartField = 'cart-itens';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  hasEmptyCart() {
    return this.storage.get(this.cartField) == null || this.storage.get(this.cartField).length == 0;
  }

  cartItensCount() {
    const obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField));
    if (obj != null) {
      return obj.length;
    }
    return 0;
  }

  getCartItens() {
    const obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField));
    return obj;
  }

  addCartItem(item: OrderItem) {
    let obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField)) || [];
    obj.push(item);
    this.storage.set(this.cartField, JSON.stringify(obj));
    alert('Item adicionado ao carrinho!');
  }

  removeCartItens(item: OrderItem) {
    let obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField));
    for (var oi of obj) {
      if( (oi.product.id === item.product.id) && (oi.amount === item.amount) ) {
        var index = obj.indexOf(oi);
        obj.splice(index, 1);
        break;
      }
    }

    this.storage.set(this.cartField, JSON.stringify(obj));
  }

  clearCart() {
    this.storage.remove(this.cartField);
  }

}
