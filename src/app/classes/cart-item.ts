import { Product } from "./product";

export class CartItem {
	amount: Number;
	id : Number; 
	product: Product;

	constructor(id : Number, product: Product){
		this.id = id;
		this.product = product;
	}
}