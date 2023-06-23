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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const swagger_1 = require("@nestjs/swagger");
const payment_schema_1 = require("../../core/models/payment.schema");
const addPayment_dto_1 = require("./dto/addPayment.dto");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async makePayment(addPayment) {
        const paymentmade = this.paymentService.makePayment(addPayment);
        return paymentmade;
    }
    async getAllPayments() {
        return this.paymentService.getAll();
    }
    async updatePayment(updatedPayment) {
        return this.paymentService.updatePayment(updatedPayment);
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiResponse)({ type: payment_schema_1.Payment }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addPayment_dto_1.AddPayment]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "makePayment", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiResponse)({ type: payment_schema_1.Payment }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getAllPayments", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, swagger_1.ApiResponse)({ type: payment_schema_1.Payment }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addPayment_dto_1.AddPayment]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "updatePayment", null);
PaymentController = __decorate([
    (0, swagger_1.ApiTags)('payment'),
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map