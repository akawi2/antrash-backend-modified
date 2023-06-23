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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_schema_1 = require("../../core/models/cart.schema");
const product_schema_1 = require("../../core/models/product.schema");
let CartService = class CartService {
    constructor(cartModel, productModel) {
        this.cartModel = cartModel;
        this.productModel = productModel;
    }
    async addcartItem(cartadd) {
        const usercart = await this.cartModel.findOne({ userid: cartadd.userid });
        if (!usercart) {
            const cart = new this.cartModel({
                userid: cartadd.userid,
                product: []
            });
            for (const p of cartadd.product) {
                if (p.productid == cartadd.product[0].productid) {
                }
                cart.product.push({
                    productid: p.productid,
                    quantity: 1,
                });
            }
            return cart.save();
        }
        else {
            const presentProductArray = usercart.product;
            const productArray = cartadd.product;
            for (const p of productArray) {
                presentProductArray.push({
                    productid: p.productid,
                    quantity: 1,
                });
            }
            const index = usercart.product.length;
            const cart = await this.cartModel.findByIdAndUpdate(usercart._id, { userid: usercart.userid,
                product: presentProductArray }, { new: true });
            return cart;
        }
    }
    async modifiedQuantity(changequantity, userid, productid) {
        const usercart = await this.cartModel.findOne({ userid: userid });
        if (!usercart) {
            throw new Error('User apparently not found');
        }
        const productArray = usercart.product;
        if (changequantity == true) {
            for (const p of productArray) {
                if (p.productid == productid) {
                    p.quantity = p.quantity + 1;
                }
            }
            const updateCart = this.cartModel.findOneAndUpdate({ userid: userid }, {
                userid: usercart.userid,
                product: productArray
            }, { new: true });
            return updateCart;
        }
        else if (changequantity == false) {
            for (const p of productArray) {
                if (p.productid == productid) {
                    p.quantity = p.quantity - 1;
                }
            }
            const updateCart = this.cartModel.findOneAndUpdate({ userid: userid }, {
                userid: usercart.userid,
                product: productArray
            }, { new: true });
            return updateCart;
        }
    }
    async showCart(userid) {
        const usercart = await this.cartModel.findOne({ userid: userid });
        const productInCart = usercart.product;
        const products = [];
        for (const p of productInCart) {
            const listProducts = await this.productModel.findOne({ _id: p.productid });
            if (listProducts) {
                products.push(listProducts);
            }
        }
        return products;
    }
    async deleteFromCart(productid) {
        const productCart = await this.cartModel.findOne({ product: { productid: productid } });
        const arr = productCart.product;
        const index = arr.findIndex((object) => {
            return object.productid === productid;
        });
        if (index !== -1) {
            arr.splice(index, 1);
        }
        const updatedCart = await this.cartModel.findOneAndUpdate({ product: { productid: productid } }, { product: arr }, { new: true });
        return "Product removed from cart successfully";
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Carts.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map