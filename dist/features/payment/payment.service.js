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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_schema_1 = require("../../core/models/payment.schema");
const wallet_schema_1 = require("../../core/models/wallet.schema");
let PaymentService = class PaymentService {
    constructor(paymentModel, walletModel) {
        this.paymentModel = paymentModel;
        this.walletModel = walletModel;
    }
    async makePayment(addPayment) {
        const wallet = await this.walletModel.findOne({ userid: addPayment.userid });
        if (addPayment.paymentmean <= wallet.amount) {
            const payment = new this.paymentModel({
                userid: addPayment.userid,
                paymentmean: addPayment.paymentmean,
                idType: addPayment.idType,
                paymentType: addPayment.idType
            });
            await this.walletModel.findOneAndUpdate({ userid: addPayment.userid }, { amount: wallet.amount - addPayment.paymentmean }, { new: true });
            return payment.save();
        }
        else {
            throw new Error("Desole votre portefeuille ne contient pas assez veuillez recharger!");
        }
    }
    async getAll() {
        const payments = await this.paymentModel.find().exec();
        return payments;
    }
    async updatePayment(updatedpay) {
        const paid = await this.paymentModel.findOneAndUpdate({ idType: updatedpay.idType, paymentType: updatedpay.paymentType }, { paymentmean: updatedpay.paymentmean, updatedAt: Date.now }, { new: true });
        return paid;
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_schema_1.Payment.name)),
    __param(1, (0, mongoose_1.InjectModel)(wallet_schema_1.Wallet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map