import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { OrderItem } from 'src/app/classes/order-item';
import { TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  role: string;
  isLogged: Boolean;

  constructor(private cart: CartService, private token: TokenPersistenceService) { }

  ngOnInit() {
    this.isLogged = this.token.hasToken();

    if (this.isLogged) {
      const tokenPayload = decode(this.token.getStringToken());
      this.role = tokenPayload.role.authority;
    }
  }

  addCart(amount: number) {
    const item = new OrderItem();
    const product = new Product();
    product.id = this.product.id;
    item.product = product;
    item.amount = amount;
    this.cart.addCartItem(item, this.product);
  }

}
