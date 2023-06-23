import mongoose, { HydratedDocument, ObjectId, Types } from "mongoose";
export type OrderDocument = HydratedDocument<Order>;
export declare class Order {
    userid: ObjectId;
    product: [
        {
            productid: ObjectId;
            quantity: number;
        }
    ];
    cost: number;
    paymentid: ObjectId;
    paymentComplete: boolean;
    createdAt: Date;
}
export declare const orderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Omit<Order & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & Omit<mongoose.FlatRecord<Order> & {
    _id: Types.ObjectId;
}, never>>;
