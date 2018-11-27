import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OrderItem } from 'src/app/classes/order-item';
import { Order } from 'src/app/classes/order';

@Component({
  selector: 'app-order-itens-table',
  templateUrl: './order-itens-table.component.html',
  styleUrls: ['./order-itens-table.component.css']
})
export class OrderItensTableComponent implements OnInit {

  @Input()
  orders: Array<Order>;

  constructor() { 
  }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    this.orders = changes.orders.currentValue;
  }

}
