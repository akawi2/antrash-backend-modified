import { Model, ObjectId } from "mongoose";
import { Order, OrderDocument } from "src/core/models/order.schema";
import { AddOrder } from "./dto/order.dto";
import { CartDocument } from "src/core/models/cart.schema";
import { ProductDocument } from "src/core/models/product.schema";
import { UserDocument } from "src/core/models/user.schema";
export declare class OrderService {
    private orderModel;
    private cartModel;
    private productModel;
    private userModel;
    constructor(orderModel: Model<OrderDocument>, cartModel: Model<CartDocument>, productModel: Model<ProductDocument>, userModel: Model<UserDocument>);
    addOrder(addOrder: AddOrder): Promise<[{
        phoneNumber: string;
        username: string;
        name: Object;
        quantity: number;
        cost: number;
    }]>;
    OrderAllCart(userid: ObjectId): Promise<[{
        phoneNumber: string;
        username: string;
        productName: string[];
        productQuantity: number[];
        cost: number;
    }]>;
    getAllOrders(): Promise<Order[]>;
}
