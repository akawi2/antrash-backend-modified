"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./features/auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./core/config/configuration");
const pickup_plan_module_1 = require("./features/pickup-plan/pickup-plan.module");
const subscription_module_1 = require("./features/subscription/subscription.module");
const pickup_module_1 = require("./features/pickup/pickup.module");
const payment_module_1 = require("./features/payment/payment.module");
const product_module_1 = require("./features/product-type/product.module");
const cart_module_1 = require("./features/cart/cart.module");
const wallet_module_1 = require("./features/wallet/wallet.module");
const order_module_1 = require("./features/order/order.module");
const category_module_1 = require("./features/category/category.module");
const notification_module_1 = require("./features/notification/notification.module");
const locationhandler_module_1 = require("./features/locationhandler/locationhandler.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
                envFilePath: ['.env.local', '.env.staging', '.env.production', '.env', '.env.mail']
            }),
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            pickup_plan_module_1.PickupPlanModule,
            subscription_module_1.SubscriptionModule,
            pickup_module_1.PickupModule,
            payment_module_1.PaymentModule,
            product_module_1.ProductModule,
            cart_module_1.CartModule,
            wallet_module_1.WalletModule,
            order_module_1.OrderModule,
            notification_module_1.NotificationModule,
            locationhandler_module_1.locationhandlerModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI, {
                connectionFactory: (connection) => {
                    connection.plugin(require('mongoose-autopopulate'));
                    return connection;
                }
            }),
            notification_module_1.NotificationModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map