import {Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {OrderItem } from 'src/app/classes/order-item';
import { Order } from 'src/app/classes/order';
import { Product } from 'src/app/classes/product';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartField = 'cart-itens';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, 
  private route: ActivatedRoute, private router: Router) {}

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

  addCartItem(item: OrderItem, product: Product) {
    let obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField)) || [];

    var index = -1;
    for (var oi of obj) {
      if(oi.product.id === item.product.id){
        index = obj.indexOf(oi);
      }
    }

    if(index >= 0){
      let gado = obj[index].amount >= product.amount;
      debugger;
      if(obj[index].amount >= product.amount){
        swal("Hold on Jackie Boy!", "No more products available for add to cart...", "error");
        return;
      }
    }

    if(index == -1){
      obj.push(item);
    }else{
      obj[index].amount = obj[index].amount.valueOf() + 1;
    }
    
    this.storage.set(this.cartField, JSON.stringify(obj));
    
    swal("Produto added!", "Product added to cart!", "success")
    .then((value) => {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
      this.router.navigate([''], { queryParams: { reload: 1 } });
    });
  }

  removeCartItens(item: OrderItem) {
    let obj: Array<OrderItem> = JSON.parse(this.storage.get(this.cartField));
    for (var oi of obj) {
      if( (oi.product.id === item.product.id) && (oi.amount === item.amount) ) {
        var index = obj.indexOf(oi);
        if(oi.amount > 1){
          oi.amount = oi.amount - 1;
        }else{
          obj.splice(index, 1);
        }
        
        break;
      }
    }

    this.storage.set(this.cartField, JSON.stringify(obj));
  }

  clearCart() {
    this.storage.remove(this.cartField);
  }

}
