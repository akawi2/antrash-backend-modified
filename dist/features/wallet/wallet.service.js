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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const wallet_schema_1 = require("../../core/models/wallet.schema");
let WalletService = class WalletService {
    constructor(walletModel) {
        this.walletModel = walletModel;
    }
    async Recharge(addToWallet) {
        const wallet = await this.walletModel.findOne({ userid: addToWallet.userid });
        if (addToWallet.amount <= 50000) {
            if (!wallet) {
                const recharge = new this.walletModel({
                    userid: addToWallet.userid,
                    phoneNumber: addToWallet.phoneNumber,
                    amount: addToWallet.amount
                });
                recharge.save();
                return "Felicitation vous venez de faire votre premiere recharge de votre numero " + addToWallet.phoneNumber + " Votre solde est a present de " + addToWallet.amount;
            }
            else {
                const recharge = await this.walletModel.findOneAndUpdate({ phoneNumber: addToWallet.phoneNumber }, { phoneNumber: addToWallet.phoneNumber,
                    amount: wallet.amount + addToWallet.amount }, { new: true });
                const newsolde = (wallet.amount + addToWallet.amount);
                return "De numero " + addToWallet.phoneNumber + ". Votre solde precedent etait de " + wallet.amount + ". Votre solde a present est de " + newsolde;
            }
        }
        else {
            throw new Error('Vous ne pouvez pas faire un retrait de plus de 50 000 F');
        }
    }
};
WalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(wallet_schema_1.Wallet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map