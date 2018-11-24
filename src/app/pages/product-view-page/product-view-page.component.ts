import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { CartService } from 'src/app/services/cart-service/cart.service';

declare var $: any;

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.css']
})
export class ProductViewPageComponent implements OnInit {

  product: Product;

  constructor( private route: ActivatedRoute,
    private router: Router, private remote : RemoteService, private cart: CartService) { }

  ngOnInit() {
  }

  addCart(amount : Number){
    let item = this.product.toCartItem();
    item.amount = amount;
    this.cart.addCartItem(item);
  }

  getProduct(){
    let id = this.route.snapshot.paramMap.get('id');
    this.remote.findProduct(Number(id))
      .then(res => {
        this.product = res;
      })
      .catch(err => {
        $(".alert").show();
      });    
  }

}
