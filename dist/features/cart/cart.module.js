"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cart_schema_1 = require("../../core/models/cart.schema");
const cart_service_1 = require("./cart.service");
const cart_controller_1 = require("./cart.controller");
const product_schema_1 = require("../../core/models/product.schema");
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        providers: [cart_service_1.CartService],
        controllers: [cart_controller_1.CartController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: cart_schema_1.Carts.name, schema: cart_schema_1.cartSchema },
                { name: product_schema_1.Product.name, schema: product_schema_1.productSchema }
            ])
        ]
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map