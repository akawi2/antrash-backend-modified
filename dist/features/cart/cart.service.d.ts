import { Model, ObjectId } from "mongoose";
import { CartDocument } from "src/core/models/cart.schema";
import { AddToCart } from "./dto/cart.dto";
import { Product, ProductDocument } from "src/core/models/product.schema";
export declare class CartService {
    private cartModel;
    private productModel;
    constructor(cartModel: Model<CartDocument>, productModel: Model<ProductDocument>);
    addcartItem(cartadd: AddToCart): Promise<CartDocument>;
    modifiedQuantity(changequantity: boolean, userid: ObjectId, productid: ObjectId): Promise<CartDocument>;
    showCart(userid: string): Promise<Product[]>;
    deleteFromCart(productid: ObjectId): Promise<string>;
}
