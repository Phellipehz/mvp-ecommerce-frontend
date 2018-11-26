import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { Product } from 'src/app/classes/product';

declare var $: any;

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  products: Array<Product> = new Array<Product>();

  constructor(private remote: RemoteService) { }

  ngOnInit() {
    this.getProductsItens();
  }

  getProductsItens() {
    this.remote.findAllProducts()
      .then(res => {
        this.products = res;
      })
      .catch(err => {
        console.log(err);
        $('.alert').show();
      });
  }

}
