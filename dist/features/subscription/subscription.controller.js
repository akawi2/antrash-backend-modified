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
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const subscription_dto_1 = require("./dto/subscription.dto");
const subscription_schema_1 = require("../../core/models/subscription.schema");
const subscription_service_1 = require("./subscription.service");
const payment_service_1 = require("../payment/payment.service");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionService, paymentService) {
        this.subscriptionService = subscriptionService;
        this.paymentService = paymentService;
    }
    async addSubscription(subcriptionDto) {
        const subcription = this.subscriptionService.addSubscription(subcriptionDto);
        return subcription;
    }
    async getAllSubscription() {
        return this.subscriptionService.getAllSubscription();
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ type: subscription_schema_1.Subscription }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_1.SubscriptionDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "addSubscription", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: subscription_schema_1.Subscription }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getAllSubscription", null);
SubscriptionController = __decorate([
    (0, swagger_1.ApiTags)('subscription'),
    (0, common_1.Controller)('subscription'),
    __param(1, (0, common_1.Inject)(payment_service_1.PaymentService)),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        payment_service_1.PaymentService])
], SubscriptionController);
exports.SubscriptionController = SubscriptionController;
//# sourceMappingURL=subscription.controller.js.map