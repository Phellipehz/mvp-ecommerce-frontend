import { Component, OnInit, Inject } from '@angular/core';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { CartItem } from 'src/app/classes/cart-item';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { CartService } from 'src/app/services/cart-service/cart.service';

declare var $: any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  itens: Array<CartItem>;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, 
    private cart: CartService, private remote: RemoteService) { }

  ngOnInit() {
    this.getCartItens();
  }

  getCartItens(){
    this.itens = this.cart.getCartItens();

    this.itens.forEach(function (value) {
      this.remote.findProduct().then(res => {
        value.id = res.id;
        value.product = res.product;
      })
      .catch(err => {
        $(".alert").show();
      });    

    }); 
  }

}
