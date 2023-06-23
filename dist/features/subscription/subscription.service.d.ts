import { Model } from "mongoose";
import { Subscription, subscriptionDocument } from "src/core/models/subscription.schema";
import { SubscriptionDto } from "./dto/subscription.dto";
import { PaymentDocument } from "src/core/models/payment.schema";
import { WalletDocument } from "src/core/models/wallet.schema";
export declare class SubscriptionService {
    private subscriptionModel;
    private walletModel;
    private paymentModel;
    constructor(subscriptionModel: Model<subscriptionDocument>, walletModel: Model<WalletDocument>, paymentModel: Model<PaymentDocument>);
    addSubscription(subscription: SubscriptionDto): Promise<Subscription>;
    getAllSubscription(): Promise<subscriptionDocument[]>;
}
