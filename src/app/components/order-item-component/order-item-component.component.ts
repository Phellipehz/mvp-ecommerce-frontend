import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/classes/order';

@Component({
  selector: 'app-order-item-component',
  templateUrl: './order-item-component.component.html',
  styleUrls: ['./order-item-component.component.css']
})
export class OrderItemComponentComponent implements OnInit {

  @Input()
  item : Order;

  constructor() { }

  ngOnInit() {
  }

}
