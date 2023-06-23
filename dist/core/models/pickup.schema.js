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
exports.PickupSchema = exports.Pickup = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const pickup_state_schema_1 = require("./pickup-state.schema");
const pickup_priority_schema_1 = require("./pickup-priority.schema");
const mongoose_2 = require("mongoose");
let Pickup = class Pickup {
};
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, unique: true }),
    __metadata("design:type", Object)
], Pickup.prototype, "pickupPlanid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Array)
], Pickup.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, mongoose_1.Prop)({ type: Date, default: Date.now() }),
    __metadata("design:type", Date)
], Pickup.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: pickup_state_schema_1.PickupStatus }),
    (0, mongoose_1.Prop)({ default: pickup_state_schema_1.PickupStatus.SUSPENDED }),
    __metadata("design:type", String)
], Pickup.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: pickup_priority_schema_1.PickupPriority }),
    (0, mongoose_1.Prop)({ default: pickup_priority_schema_1.PickupPriority.NORMAL }),
    __metadata("design:type", String)
], Pickup.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pickup.prototype, "observation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Pickup.prototype, "userid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Pickup.prototype, "agentid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Pickup.prototype, "paymentid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Pickup.prototype, "notes", void 0);
Pickup = __decorate([
    (0, mongoose_1.Schema)()
], Pickup);
exports.Pickup = Pickup;
exports.PickupSchema = mongoose_1.SchemaFactory.createForClass(Pickup);
//# sourceMappingURL=pickup.schema.js.map