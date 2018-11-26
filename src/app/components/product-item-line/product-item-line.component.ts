import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-product-item-line',
  templateUrl: './product-item-line.component.html',
  styleUrls: ['./product-item-line.component.css']
})
export class ProductItemLineComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  deleteAction() {
    // TODO chama o remoto
  }

  updateAction() {
    // TODO abre em outra pagina
  }

}
