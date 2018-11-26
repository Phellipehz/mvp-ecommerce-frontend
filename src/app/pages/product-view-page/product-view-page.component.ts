import {Component, OnInit } from '@angular/core';
import {Product } from 'src/app/classes/product';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {CartService } from 'src/app/services/cart-service/cart.service';
import {OrderItem } from 'src/app/classes/order-item';

declare var $: any;

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.css']
})
export class ProductViewPageComponent implements OnInit {

  product: Product;
  relatedProducts: Array<Product>;

  constructor( private route: ActivatedRoute,
    private router: Router, private remote: RemoteService, private cart: CartService) {}

  ngOnInit() {
    this.getProduct();
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

  addCart(amount: Number) {
    const item = new OrderItem();
    const product = new Product();
    product.id = this.product.id;
    item.product = product;
    item.amount = amount;
    this.cart.addCartItem(item);
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
