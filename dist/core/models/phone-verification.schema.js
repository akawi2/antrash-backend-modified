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
exports.PhoneVerificationSchema = exports.PhoneVerification = void 0;
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const hash_1 = require("../../shared/constants/hash");
const TEN_MINUTES = 60 * 10;
let PhoneVerification = class PhoneVerification {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], PhoneVerification.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PhoneVerification.prototype, "otp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PhoneVerification.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: Date.now, nullable: false }),
    __metadata("design:type", Date)
], PhoneVerification.prototype, "createAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: Date.now, nullable: false }),
    __metadata("design:type", Date)
], PhoneVerification.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, nullable: true }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PhoneVerification.prototype, "deletedAt", void 0);
PhoneVerification = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'phone_verifications',
        expireAfterSeconds: TEN_MINUTES,
    })
], PhoneVerification);
exports.PhoneVerification = PhoneVerification;
exports.PhoneVerificationSchema = mongoose_1.SchemaFactory.createForClass(PhoneVerification);
exports.PhoneVerificationSchema.pre('save', function (next) {
    if (!this.isModified('otp'))
        return next();
    try {
        this.otp = bcrypt.hashSync(this.otp, hash_1.hashConstants.bcryptSaltOrRounds);
        next();
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=phone-verification.schema.js.map