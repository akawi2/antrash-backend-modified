"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("../../core/models/order.schema");
const cart_schema_1 = require("../../core/models/cart.schema");
const product_schema_1 = require("../../core/models/product.schema");
const order_service_1 = require("./order.service");
const payment_service_1 = require("../payment/payment.service");
const wallet_schema_1 = require("../../core/models/wallet.schema");
const payment_module_1 = require("../payment/payment.module");
const wallet_module_1 = require("../wallet/wallet.module");
const payment_schema_1 = require("../../core/models/payment.schema");
const mail_service_1 = require("../mail/mail.service");
const user_schema_1 = require("../../core/models/user.schema");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        providers: [order_service_1.OrderService, payment_service_1.PaymentService, mail_service_1.EmailService],
        controllers: [order_controller_1.OrderController],
        imports: [
            payment_module_1.PaymentModule,
            wallet_module_1.WalletModule,
            mongoose_1.MongooseModule.forFeature([
                { name: order_schema_1.Order.name, schema: order_schema_1.orderSchema },
                { name: cart_schema_1.Carts.name, schema: cart_schema_1.cartSchema },
                { name: product_schema_1.Product.name, schema: product_schema_1.productSchema },
                { name: wallet_schema_1.Wallet.name, schema: wallet_schema_1.walletSchema },
                { name: payment_schema_1.Payment.name, schema: payment_schema_1.paymentSchema },
                { name: product_schema_1.Product.name, schema: product_schema_1.productSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema }
            ])
        ]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map