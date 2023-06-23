import { CartService } from "./cart.service";
import { Carts } from "src/core/models/cart.schema";
import { AddToCart } from "./dto/cart.dto";
import { ObjectId } from "mongoose";
import { Product } from "src/core/models/product.schema";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(addCart: AddToCart): Promise<Carts>;
    updatedCart(userid: ObjectId, productid: ObjectId, body: {
        change: boolean;
    }): Promise<Carts>;
    displayCart(userid: string): Promise<Product[]>;
    deleteProductFromCart(productid: ObjectId): Promise<string>;
}
