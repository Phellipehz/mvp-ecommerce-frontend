import {Component, OnInit, ViewChild } from '@angular/core';
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
    swal("Produto salvo!", "Produto cadastrado com sucesso!", "success")
    .then((value) => {
      this.router.navigate(['/administration']);
    });
  }

  submitAction() {
    console.log(this.product);
    this.remote.addProduct(this.product)
      .then(res => {
        this.confirm();
      })
      .catch(err => {
        console.error(err);
        swal("Oops", "Não foi possivel salvar produto do servidor remoto...", "error");
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
