import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { RemoteService } from 'src/app/services/remote/remote.service';

declare var $: any;

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input()
  products: Array<Product>;

  constructor(private remote: RemoteService) { }

  ngOnInit() {
  }

  deleteAction(product: Product) {
    this.remote.deleteProduct(product)
    .then(res => {
      alert("Deletado com sucesso");
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
      $('.alert').show();
    });
  }

}
