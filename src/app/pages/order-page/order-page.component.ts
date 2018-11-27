import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { RemoteService } from 'src/app/services/remote/remote.service';

declare var $: any;

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  orders: Array<Order>;

  constructor(private remote: RemoteService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.remote.findAllOrders()
      .then(res => {
        this.orders = res || [];
      })
      .catch(err => {
        console.error(err);
        $('.alert').show();
      });
  }

}
