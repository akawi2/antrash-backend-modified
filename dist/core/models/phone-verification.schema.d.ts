import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type PhoneVerificationDocument = HydratedDocument<PhoneVerification>;
export declare class PhoneVerification {
    userId: ObjectId;
    otp: string;
    timestamp: Date;
    createAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export declare const PhoneVerificationSchema: mongoose.Schema<PhoneVerification, mongoose.Model<PhoneVerification, any, any, any, mongoose.Document<unknown, any, PhoneVerification> & Omit<PhoneVerification & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PhoneVerification, mongoose.Document<unknown, {}, mongoose.FlatRecord<PhoneVerification>> & Omit<mongoose.FlatRecord<PhoneVerification> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
