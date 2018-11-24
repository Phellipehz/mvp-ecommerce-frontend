import { CartItem } from "./cart-item";

export class Product {
	
	id : Number;
    name: string;
	value: Number;
	description: string;
	photo: string;
	amount : Number;

	toCartItem(){
		return new CartItem(this.id, this);
	}

}
