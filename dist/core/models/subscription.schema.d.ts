import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type subscriptionDocument = HydratedDocument<Subscription>;
export declare class Subscription {
    userid: ObjectId;
    amount: number;
    paymentid: ObjectId;
    phoneNumber: String;
    createdAt: Date;
    endDate: Date;
    status: String;
}
export declare const subscriptionSchema: mongoose.Schema<Subscription, mongoose.Model<Subscription, any, any, any, mongoose.Document<unknown, any, Subscription> & Omit<Subscription & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Subscription, mongoose.Document<unknown, {}, mongoose.FlatRecord<Subscription>> & Omit<mongoose.FlatRecord<Subscription> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
