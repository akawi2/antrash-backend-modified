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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("../../core/models/order.schema");
const cart_schema_1 = require("../../core/models/cart.schema");
const product_schema_1 = require("../../core/models/product.schema");
const user_schema_1 = require("../../core/models/user.schema");
let OrderService = class OrderService {
    constructor(orderModel, cartModel, productModel, userModel) {
        this.orderModel = orderModel;
        this.cartModel = cartModel;
        this.productModel = productModel;
        this.userModel = userModel;
    }
    async addOrder(addOrder) {
        const productOrder = addOrder.product[0];
        const product = await this.productModel.findOne({ _id: "648c80a28b3e6a8f344d2b4e" });
        const productName = product.name;
        const cost = product.price * 4;
        const user = await this.userModel.findOne({ _id: addOrder.userid });
        const orderadd = new this.orderModel({
            userid: addOrder.userid,
            product: addOrder.product,
            cost: cost
        }).save();
        return [{ phoneNumber: user.phoneNumber, username: user.username, name: productName, quantity: 4, cost: cost }];
    }
    async OrderAllCart(userid) {
        const cart = await this.cartModel.findOne({ userid: userid });
        const user = await this.userModel.findOne({ _id: userid });
        let cost = 0;
        let productName = [];
        let productQuantity = [];
        for (const c of cart.product) {
            const product = await this.productModel.findOne({ _id: c.productid });
            cost = cost + product.price * c.quantity;
            productName.push(product.name);
            productQuantity.push(c.quantity);
        }
        const order = new this.orderModel({
            userid: userid,
            product: cart.product,
            cost: cost,
        }).save();
        return [{ phoneNumber: user.phoneNumber, username: user.username, productName: productName, productQuantity: productQuantity, cost: cost }];
    }
    async getAllOrders() {
        const orders = await this.orderModel.find().exec();
        return orders;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, mongoose_1.InjectModel)(cart_schema_1.Carts.name)),
    __param(2, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __param(3, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map