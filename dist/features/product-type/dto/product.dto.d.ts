import { ObjectId } from "mongoose";
export declare class AddProduct {
    categoryid: ObjectId;
    name: {
        french: string;
        english: string;
    };
    availability: boolean;
    stock: number;
    price: number;
    image: [];
    description: {
        french: string;
        english: string;
    };
    color: [
        {
            name: string;
            code: string;
        }
    ];
}
