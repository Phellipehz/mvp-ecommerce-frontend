import { Injectable, Inject } from '@angular/core';
import { CartItem } from 'src/app/classes/cart-item';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartField : string = "cart-itens";
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  hasEmptyCart(){
    return this.storage.get(this.cartField) == null;
  }

  cartItensCount(){
    let obj: Array<CartItem> = JSON.parse(this.storage.get(this.cartField));
    if(obj != null){
      return obj.length;
    }
    return 0;
  }

  getCartItens(){
    let obj: Array<CartItem> = JSON.parse(this.storage.get(this.cartField));
    return obj;
  }

  addCartItem(item : CartItem){
    let obj: Array<CartItem> = JSON.parse(this.storage.get(this.cartField));
    obj.push(item);
    this.storage.set(this.cartField, JSON.stringify(obj));
  }

  removeCartItens(item: CartItem){
    let obj: Array<CartItem> = JSON.parse(this.storage.get(this.cartField));
    const index: number = obj.indexOf(item);
    if (index !== -1) {
      obj.splice(index, 1);
    }        
    this.storage.set(this.cartField, JSON.stringify(obj));
  }

  clearCart(){
    this.storage.remove(this.cartField);
  }

}
