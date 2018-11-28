import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input()
  products: Array<Product>;

  constructor(private remote: RemoteService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
  }

  deleteAction(product: Product) {
    this.remote.deleteProduct(product)
    .then(res => {
      swal("Product Removed!", "The product was removed from remote server..", "success")
      .then((value) => {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };
        this.router.navigate(['/administration'], { queryParams: { reload: Math.random() } });
      });
    })
    .catch(err => {
      console.log(err);
      swal("Oops", "It wasn't possible to remove product from remove server...", "error");
    });
  }

}


