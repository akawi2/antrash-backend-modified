"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const subscription_controller_1 = require("./subscription.controller");
const subscription_service_1 = require("./subscription.service");
const subscription_schema_1 = require("../../core/models/subscription.schema");
const mongoose_1 = require("@nestjs/mongoose");
const payment_schema_1 = require("../../core/models/payment.schema");
const wallet_schema_1 = require("../../core/models/wallet.schema");
const payment_service_1 = require("../payment/payment.service");
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = __decorate([
    (0, common_1.Module)({
        providers: [subscription_service_1.SubscriptionService, payment_service_1.PaymentService],
        controllers: [subscription_controller_1.SubscriptionController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: subscription_schema_1.Subscription.name, schema: subscription_schema_1.subscriptionSchema },
                { name: payment_schema_1.Payment.name, schema: payment_schema_1.paymentSchema },
                { name: wallet_schema_1.Wallet.name, schema: wallet_schema_1.walletSchema },
            ])
        ],
    })
], SubscriptionModule);
exports.SubscriptionModule = SubscriptionModule;
//# sourceMappingURL=subscription.module.js.map