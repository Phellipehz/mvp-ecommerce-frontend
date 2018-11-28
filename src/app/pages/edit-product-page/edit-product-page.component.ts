import {Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {Product } from 'src/app/classes/product';
import swal from 'sweetalert';

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
    swal("Product updated!", "Product updated successfully!", "success")
    .then((value) => {
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
      swal("Oops", "It wasn't possible to get data from remove server...", "error");
    });
  }

  submitAction() {
    if(this.product != null){
      this.remote.updateProduct(this.product)
      .then(res => {
        this.confirm();
      })
      .catch(err => {
        console.log(err);
        swal("Oops", "It wasn't possible to update product on remove server...", "error");
      });
    }
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
