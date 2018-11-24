import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { Product } from 'src/app/classes/product';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products : Array<Product> = new Array<Product>();

  constructor(private remote: RemoteService) { }

  ngOnInit() {
    this.getProductsItens();
  }

  getProductsItens(){
    this.remote.findAllProducts()
      .then(res => {
        this.products = res;
      })
      .catch(err => {
        $(".alert").show();
      });    
  }

}
