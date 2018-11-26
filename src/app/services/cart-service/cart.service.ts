import {Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {OrderItem } from 'src/app/classes/order-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartField = 'cart-itens';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  hasEmptyCart() {
    return this.storage.get(this.cartField) == null;
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
    const obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField)) || [];
    obj.push(item);
    this.storage.set(this.cartField, JSON.stringify(obj));
    alert('Item adicionado ao carrinho!');
  }

  removeCartItens(item: OrderItem) {
    const obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField));
    const index: number = obj.indexOf(item);
    if (index !== -1) {
      obj.splice(index, 1);
    }
    this.storage.set(this.cartField, JSON.stringify(obj));
  }

  clearCart() {
    this.storage.remove(this.cartField);
  }

}
