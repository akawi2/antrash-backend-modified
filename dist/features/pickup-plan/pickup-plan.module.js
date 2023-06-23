"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupPlanModule = void 0;
const common_1 = require("@nestjs/common");
const pickup_plan_controller_1 = require("./pickup-plan.controller");
const pickup_plan_service_1 = require("./pickup-plan.service");
const mongoose_1 = require("@nestjs/mongoose");
const pickup_plan_shema_1 = require("../../core/models/pickup-plan.shema");
const location_schema_1 = require("../../core/models/location.schema");
let PickupPlanModule = class PickupPlanModule {
};
PickupPlanModule = __decorate([
    (0, common_1.Module)({
        controllers: [pickup_plan_controller_1.PickupPlanController],
        providers: [pickup_plan_service_1.PickupPlanService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: pickup_plan_shema_1.PickupPlan.name, schema: pickup_plan_shema_1.PickUpPlanSchema },
                { name: location_schema_1.Location.name, schema: location_schema_1.LocationSchema }
            ])
        ]
    })
], PickupPlanModule);
exports.PickupPlanModule = PickupPlanModule;
//# sourceMappingURL=pickup-plan.module.js.map