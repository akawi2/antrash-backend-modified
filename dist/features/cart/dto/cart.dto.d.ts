import { ObjectId } from "mongoose";
export declare class AddToCart {
    userid: ObjectId;
    product: [
        {
            productid: ObjectId;
        }
    ];
}
