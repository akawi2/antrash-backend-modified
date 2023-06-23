import { ObjectId } from "mongoose";
export declare class AddOrder {
    userid: ObjectId;
    product: [
        {
            productid: ObjectId;
            quantity: number;
        }
    ];
}
