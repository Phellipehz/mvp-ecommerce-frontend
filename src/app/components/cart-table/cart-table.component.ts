import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/classes/order-item';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  @Input()
  itens: Array<OrderItem>;

  constructor(private route: ActivatedRoute, private router: Router, private cart: CartService) {}

  ngOnInit() {
  }

  deleteAction(item) {
    this.cart.removeCartItens(item);
    swal("Product Removed!", "The product was removed from cart..", "success")
    .then((value) => {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
      this.router.navigate([''], { queryParams: { reload: 1 } });
    });
  }

}
