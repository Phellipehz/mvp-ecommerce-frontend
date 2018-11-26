import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { OrderItem } from 'src/app/classes/order-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  addCart(amount: Number) {
    const item = new OrderItem();
    const product = new Product();
    product.id = this.product.id;
    item.product = product;
    item.amount = amount;
    this.cart.addCartItem(item);
  }

}
