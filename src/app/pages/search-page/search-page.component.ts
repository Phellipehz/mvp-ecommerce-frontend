import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { CartService } from 'src/app/services/cart-service/cart.service';

declare var $: any;

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  products: Array<Product> = new Array<Product>();

  constructor(private route: ActivatedRoute,
    private router: Router, private remote: RemoteService, private cart: CartService) { }

  ngOnInit() {
    const term = this.route.snapshot.paramMap.get('term');
    this.findProducts(term);
  }

  findProducts(term: string) {
    this.remote.findProductsByNameOrCategory(term)
    .then(res => {
      this.products = res;
    })
    .catch(err => {
      console.log(err);
      $('.alert').show();
    });
  }
}
