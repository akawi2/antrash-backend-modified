import mongoose, { HydratedDocument, ObjectId, Types } from "mongoose";
export type CartDocument = HydratedDocument<Carts>;
export declare class Carts {
    userid: ObjectId;
    product: [
        {
            productid: ObjectId;
            quantity: number;
        }
    ];
    createdAt: Date;
    expiresIn: Date;
}
export declare const cartSchema: mongoose.Schema<Carts, mongoose.Model<Carts, any, any, any, mongoose.Document<unknown, any, Carts> & Omit<Carts & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Carts, mongoose.Document<unknown, {}, mongoose.FlatRecord<Carts>> & Omit<mongoose.FlatRecord<Carts> & {
    _id: Types.ObjectId;
}, never>>;
