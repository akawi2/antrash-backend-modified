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
exports.AddPickupPlan = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddPickupPlan {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [] }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], AddPickupPlan.prototype, "locationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number, Number] }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], AddPickupPlan.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], AddPickupPlan.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    __metadata("design:type", Object)
], AddPickupPlan.prototype, "agentid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Object)
], AddPickupPlan.prototype, "userid", void 0);
exports.AddPickupPlan = AddPickupPlan;
//# sourceMappingURL=addpickup-plan.dto.js.map