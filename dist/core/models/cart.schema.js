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
exports.cartSchema = exports.Carts = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let Carts = class Carts {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, required: true, unique: true }),
    __metadata("design:type", Object)
], Carts.prototype, "userid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
    }),
    (0, mongoose_1.Prop)({ ref: 'products', required: true }),
    __metadata("design:type", Array)
], Carts.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], Carts.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(new Date().setMonth(new Date().getDay() + 3)) }),
    __metadata("design:type", Date)
], Carts.prototype, "expiresIn", void 0);
Carts = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false
    })
], Carts);
exports.Carts = Carts;
exports.cartSchema = mongoose_1.SchemaFactory.createForClass(Carts);
//# sourceMappingURL=cart.schema.js.map