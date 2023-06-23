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
exports.PickUpPlanSchema = exports.PickupPlan = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const console_1 = require("console");
const mongoose_2 = require("mongoose");
let PickupPlan = class PickupPlan {
};
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Array)
], PickupPlan.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], PickupPlan.prototype, "locationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [console_1.time, console_1.time], nullable: false }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], PickupPlan.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, nullable: false }),
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], PickupPlan.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: Date.now }),
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], PickupPlan.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], PickupPlan.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: false, nullable: true, type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], PickupPlan.prototype, "agentid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: false, nullable: true, type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], PickupPlan.prototype, "userid", void 0);
PickupPlan = __decorate([
    (0, mongoose_1.Schema)()
], PickupPlan);
exports.PickupPlan = PickupPlan;
exports.PickUpPlanSchema = mongoose_1.SchemaFactory.createForClass(PickupPlan);
//# sourceMappingURL=pickup-plan.shema.js.map