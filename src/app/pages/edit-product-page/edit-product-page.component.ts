import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {Product } from 'src/app/classes/product';

declare var $: any;

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.css']
})
export class EditProductPageComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
    private router: Router, private remote: RemoteService) {}

  confirm() {
    alert('Atualizado com sucesso');
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    setTimeout(function() {
      this.router.navigate(['/administration']);
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.remote.findProduct(Number(id))
    .then(res => {
      this.product = res;
    })
    .catch(err => {
      console.log(err);
      $('.alert').show();
    });
  }

  submitAction() {
  
    this.remote.updateProduct(this.product)
    .then(res => {
      confirm();
    })
    .catch(err => {
      console.log(err);
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
