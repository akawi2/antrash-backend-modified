"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const swagger_1 = require("@nestjs/swagger");
const cart_schema_1 = require("../../core/models/cart.schema");
const cart_dto_1 = require("./dto/cart.dto");
const product_schema_1 = require("../../core/models/product.schema");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(addCart) {
        return this.cartService.addcartItem(addCart);
    }
    async updatedCart(userid, productid, body) {
        return this.cartService.modifiedQuantity(body.change, userid, productid);
    }
    async displayCart(userid) {
        return this.cartService.showCart(userid);
    }
    async deleteProductFromCart(productid) {
        return this.cartService.deleteFromCart(productid);
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiResponse)({ type: cart_schema_1.Carts }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.AddToCart]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Patch)('update/:userid;:productid'),
    (0, swagger_1.ApiResponse)({ type: cart_schema_1.Carts }),
    __param(0, (0, common_1.Param)('userid')),
    __param(1, (0, common_1.Param)('productid')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updatedCart", null);
__decorate([
    (0, common_1.Get)('/:userid'),
    (0, swagger_1.ApiResponse)({ type: product_schema_1.Product }),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "displayCart", null);
__decorate([
    (0, common_1.Delete)('/delete/:productid'),
    (0, swagger_1.ApiResponse)({ type: String }),
    __param(0, (0, common_1.Param)('productid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteProductFromCart", null);
CartController = __decorate([
    (0, swagger_1.ApiTags)('cart'),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map