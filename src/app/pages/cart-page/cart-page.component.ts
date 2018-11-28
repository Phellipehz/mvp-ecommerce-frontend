import {Component, OnInit, Inject, SimpleChanges } from '@angular/core';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {CartService } from 'src/app/services/cart-service/cart.service';
import {Product } from 'src/app/classes/product';
import {OrderItem } from 'src/app/classes/order-item';
import {TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';
import { Order } from 'src/app/classes/order';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  itens: Array<OrderItem> = new Array<OrderItem>();
  emptyCart: Boolean;
  itensCount: number = 0;
  itensPrice: number = 0;
  isLogged: Boolean;

  constructor(
  private route: ActivatedRoute, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService, private cart: CartService, 
  private remote: RemoteService, private token: TokenPersistenceService) {}

  ngOnInit() {
    this.getCartItens();
    this.emptyCart = this.cart.hasEmptyCart();
    this.isLogged = this.token.hasToken();
  }

  confirmOrder() {
    const order = new Order();
    order.products = this.itens;

    this.remote.addOrder(order)
      .then(res => {
        alert("Compra finalizada!");
        this.cart.clearCart();
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
        $('.alert').show();
      });
  }

  getCartItens() {
    this.itens = this.cart.getCartItens();
    if (!this.cart.hasEmptyCart()) {
      this.itens.forEach( (value) => {
          this.remote.findProduct(value.product.id).then(res => {
            value.product = res;

            // var has = true;
            // this.itens.forEach( (fp) => {
            //   if(fp.product.value == null){
            //     has = false;
            //   }
            // });

            // if(!has){
              //debugger;
              this.itensPrice = this.itensPrice + (value.product.value.valueOf() * value.amount.valueOf());
              this.itensCount = this.itensCount + value.amount.valueOf();
            // }

          })
          .catch(err => {
            console.log(err);
            $('.alert').show();
          });
        
      });


    }
  }
}
