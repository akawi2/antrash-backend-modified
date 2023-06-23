import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type ProductDocument = HydratedDocument<Product>;
export declare class Product {
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
    createdAt: Date;
    updated_at: Date;
}
export declare const productSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Omit<Product & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & Omit<mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
