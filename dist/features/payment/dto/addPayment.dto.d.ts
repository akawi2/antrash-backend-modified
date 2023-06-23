import { ObjectId } from "mongoose";
import { PaymentType } from "src/core/models/paymenType.schema";
export declare class AddPayment {
    userid: ObjectId;
    paymentmean: number;
    idType: ObjectId;
    paymentType: PaymentType;
}
