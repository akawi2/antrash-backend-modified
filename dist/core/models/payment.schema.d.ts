import mongoose, { HydratedDocument, ObjectId } from "mongoose";
import { PaymentType } from "./paymenType.schema";
export type PaymentDocument = HydratedDocument<Payment>;
export declare class Payment {
    userid: ObjectId;
    paymentmean: number;
    idType: ObjectId;
    paymentType: PaymentType;
    createdAt: Date;
    updatedAt: Date;
}
export declare const paymentSchema: mongoose.Schema<Payment, mongoose.Model<Payment, any, any, any, mongoose.Document<unknown, any, Payment> & Omit<Payment & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Payment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Payment>> & Omit<mongoose.FlatRecord<Payment> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
