import {Component, OnInit } from '@angular/core';
import {Product } from 'src/app/classes/product';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.css']
})
export class NewProductPageComponent implements OnInit {

  product: Product = new Product();

  constructor(private remote: RemoteService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }

  confirm() {
    alert('Cadastrado com sucesso');

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    setTimeout(function() {
      this.router.navigate(['/administration']);
    });
  }

  submitAction() {
    console.log(this.product);
    this.remote.addProduct(this.product)
      .then(res => {
        confirm();
      })
      .catch(err => {
        $('.alert').show();
      });
  }

  onChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.product.photo = reader.result.toString();
      };
    }
  }

}
