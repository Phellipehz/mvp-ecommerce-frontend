import {Component, OnInit, Inject } from '@angular/core';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {CartService } from 'src/app/services/cart-service/cart.service';
import {Product } from 'src/app/classes/product';
import {OrderItem } from 'src/app/classes/order-item';
import {TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';

declare var $: any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  itens: Array<OrderItem> = new Array<OrderItem>();
  emptyCart: Boolean;
  itensCount: number;
  itensPrice: number;
  isLogged: Boolean;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private cart: CartService, 
  private remote: RemoteService, private token: TokenPersistenceService) {}

  ngOnInit() {
    this.getCartItens();
    this.emptyCart = this.cart.hasEmptyCart();
    this.isLogged = this.token.hasToken();
  }

  confirmOrder() {

  }

  getCartItens() {
    this.itens = this.cart.getCartItens();
    if (!this.cart.hasEmptyCart()) {
      this.itens.forEach( (value) => {
        this.remote.findProduct(value.product.id).then(res => {
          value.product = res;
          this.itensPrice = this.itensPrice + res.value.valueOf();
          this.itensCount = this.itensCount + 1;
        })
        .catch(err => {
          $('.alert').show();
        });
      });
    }
  }
}
