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
exports.LocationSchema = exports.Location = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let Location = class Location {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", Object)
], Location.prototype, "userid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true, type: [Object], }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Location.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String, default: "maison" }),
    __metadata("design:type", String)
], Location.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Location.prototype, "locationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: false }),
    (0, mongoose_1.Prop)({ type: [] }),
    __metadata("design:type", Array)
], Location.prototype, "addressComplement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, nullable: false }),
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Location.prototype, "createdAt", void 0);
Location = __decorate([
    (0, mongoose_1.Schema)()
], Location);
exports.Location = Location;
exports.LocationSchema = mongoose_1.SchemaFactory.createForClass(Location);
//# sourceMappingURL=location.schema.js.map