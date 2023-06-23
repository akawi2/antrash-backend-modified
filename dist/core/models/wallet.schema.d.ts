import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type WalletDocument = HydratedDocument<Wallet>;
export declare class Wallet {
    userid: ObjectId;
    phoneNumber: string;
    amount: number;
}
export declare const walletSchema: mongoose.Schema<Wallet, mongoose.Model<Wallet, any, any, any, mongoose.Document<unknown, any, Wallet> & Omit<Wallet & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Wallet, mongoose.Document<unknown, {}, mongoose.FlatRecord<Wallet>> & Omit<mongoose.FlatRecord<Wallet> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
