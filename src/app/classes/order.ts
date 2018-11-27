import {Product } from './product';
import {OrderItem } from './order-item';

export class Order {
    id: Number;
    products: Array<OrderItem>;
    account: Account;
}
