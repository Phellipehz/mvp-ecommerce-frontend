import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/classes/cart-item';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.css']
})
export class CartItemComponentComponent implements OnInit {

  @Input()
  item : CartItem;

  constructor() { }

  ngOnInit() {
  }

}
