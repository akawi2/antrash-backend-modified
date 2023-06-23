import { SubscriptionDto } from "./dto/subscription.dto";
import { Subscription } from "src/core/models/subscription.schema";
import { SubscriptionService } from "./subscription.service";
import { PaymentService } from "../payment/payment.service";
export declare class SubscriptionController {
    private readonly subscriptionService;
    private readonly paymentService;
    constructor(subscriptionService: SubscriptionService, paymentService: PaymentService);
    addSubscription(subcriptionDto: SubscriptionDto): Promise<Subscription>;
    getAllSubscription(): Promise<Subscription[]>;
}
