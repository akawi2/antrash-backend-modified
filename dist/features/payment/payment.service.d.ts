import { Model } from "mongoose";
import { Payment, PaymentDocument } from "src/core/models/payment.schema";
import { AddPayment } from "./dto/addPayment.dto";
import { WalletDocument } from "src/core/models/wallet.schema";
export declare class PaymentService {
    paymentModel: Model<Payment>;
    private walletModel;
    constructor(paymentModel: Model<Payment>, walletModel: Model<WalletDocument>);
    makePayment(addPayment: AddPayment): Promise<PaymentDocument>;
    getAll(): Promise<PaymentDocument[]>;
    updatePayment(updatedpay: AddPayment): Promise<PaymentDocument>;
}
