import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/classes/order-item';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  @Input('orders')
  orders: Array<OrderItem>;

  constructor() {
    debugger;
  }

  ngOnInit() {
  }

}
