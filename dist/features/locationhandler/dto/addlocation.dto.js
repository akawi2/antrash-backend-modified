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
exports.AddLocation = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddLocation {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], AddLocation.prototype, "userid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Array)
], AddLocation.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], AddLocation.prototype, "locationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], AddLocation.prototype, "addressComplement", void 0);
exports.AddLocation = AddLocation;
//# sourceMappingURL=addlocation.dto.js.map