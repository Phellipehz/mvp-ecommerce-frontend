import {Component, OnInit } from '@angular/core';
import {Product } from 'src/app/classes/product';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {CartService } from 'src/app/services/cart-service/cart.service';
import {OrderItem } from 'src/app/classes/order-item';
import { TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';
import decode from 'jwt-decode';

declare var $: any;

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.css']
})
export class ProductViewPageComponent implements OnInit {

  product: Product;
  relatedProducts: Array<Product>;
  role: string;
  isLogged: Boolean;

  constructor( private route: ActivatedRoute,
    private router: Router, private remote: RemoteService, private cart: CartService, 
    private token: TokenPersistenceService) {}

  ngOnInit() {
    this.getProduct();
    this.isLogged = this.token.hasToken();

    if (this.isLogged) {
      const tokenPayload = decode(this.token.getStringToken());
      this.role = tokenPayload.role.authority;
    }
  }

  getRelatedProducts() {
    this.remote.findProductsByNameOrCategory(this.product.category)
      .then(res => {
        this.relatedProducts = res;
      })
      .catch(err => {
        console.log(err);
        $('.alert').show();
      });
  }

  addCart(amount: number) {
    const item = new OrderItem();
    const product = new Product();
    product.id = this.product.id;
    item.product = product;
    item.amount = amount;
    this.cart.addCartItem(item, this.product);
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.remote.findProduct(Number(id))
      .then(res => {
        this.product = res;
        this.getRelatedProducts();
      })
      .catch(err => {
        console.log(err);
        $('.alert').show();
      });
  }

}
