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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const swagger_1 = require("@nestjs/swagger");
const order_schema_1 = require("../../core/models/order.schema");
const order_dto_1 = require("./dto/order.dto");
const payment_service_1 = require("../payment/payment.service");
const mail_service_1 = require("../mail/mail.service");
let OrderController = class OrderController {
    constructor(orderService, paymentService, emailService) {
        this.orderService = orderService;
        this.paymentService = paymentService;
        this.emailService = emailService;
    }
    async getAllOrders() {
        return this.orderService.getAllOrders();
    }
    async addOrder(newOrder) {
        const order = await this.orderService.addOrder(newOrder);
        this.emailService.orderEmail(order);
        return order;
    }
    async orderAll(userid) {
        const order = await this.orderService.OrderAllCart(userid.userid);
        this.emailService.orderAllEmail(order);
        return order;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ type: order_schema_1.Order }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: order_schema_1.Order }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.AddOrder]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: order_schema_1.Order }),
    (0, common_1.Post)('/all'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "orderAll", null);
OrderController = __decorate([
    (0, swagger_1.ApiTags)('order'),
    (0, common_1.Controller)('order'),
    __param(1, (0, common_1.Inject)(payment_service_1.PaymentService)),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        payment_service_1.PaymentService,
        mail_service_1.EmailService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map