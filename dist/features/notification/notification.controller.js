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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
const notification_schema_1 = require("../../core/models/notification.schema");
const notification_dto_1 = require("./dto/notification.dto");
const swagger_1 = require("@nestjs/swagger");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async addNotification(addNotification) {
        return this.notificationService.addNotification(addNotification);
    }
    async updateNotification(notificationid, modifiedNotification) {
        return this.notificationService.updateNotification(notificationid, modifiedNotification);
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiResponse)({ type: notification_schema_1.Notification }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_dto_1.AddNotification]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "addNotification", null);
__decorate([
    (0, common_1.Patch)('update/:notificationid'),
    (0, swagger_1.ApiResponse)({ type: notification_schema_1.Notification }),
    __param(0, (0, common_1.Param)('notificationid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, notification_dto_1.AddNotification]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateNotification", null);
NotificationController = __decorate([
    (0, swagger_1.ApiTags)('notification'),
    (0, common_1.Controller)('notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map