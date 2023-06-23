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
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletSchema = exports.Wallet = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Wallet = class Wallet {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_2.Prop)({ required: true, nullable: false, type: mongoose_1.default.Schema.Types.ObjectId, unique: true }),
    __metadata("design:type", Object)
], Wallet.prototype, "userid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_2.Prop)({ required: true, nullable: false, unique: false }),
    __metadata("design:type", String)
], Wallet.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_2.Prop)({ required: true, nullable: false }),
    __metadata("design:type", Number)
], Wallet.prototype, "amount", void 0);
Wallet = __decorate([
    (0, mongoose_2.Schema)()
], Wallet);
exports.Wallet = Wallet;
exports.walletSchema = mongoose_2.SchemaFactory.createForClass(Wallet);
//# sourceMappingURL=wallet.schema.js.map