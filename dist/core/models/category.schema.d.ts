import mongoose, { HydratedDocument, Types } from "mongoose";
export type CategoryDocument = HydratedDocument<Category>;
export declare class Category {
    name: {
        french: string;
        english: string;
    };
    image: string;
    createdAt: Date;
}
export declare const categorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Omit<Category & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & Omit<mongoose.FlatRecord<Category> & {
    _id: Types.ObjectId;
}, never>>;
