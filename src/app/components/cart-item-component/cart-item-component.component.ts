import {Component, OnInit, Input } from '@angular/core';
import {OrderItem } from 'src/app/classes/order-item';
import {CartService } from 'src/app/services/cart-service/cart.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.css']
})
export class CartItemComponentComponent implements OnInit {

  @Input()
  item: OrderItem;

  constructor(private route: ActivatedRoute, private router: Router, private cart: CartService) {}

  ngOnInit() {
  }

  deleteAction(item) {
    console.log(item);
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this.cart.removeCartItens(item);
    this.router.navigate(['/cart']);
  }
}
