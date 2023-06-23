"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupModule = void 0;
const common_1 = require("@nestjs/common");
const pickup_controller_1 = require("./pickup.controller");
const pickup_service_1 = require("./pickup.service");
const mongoose_1 = require("@nestjs/mongoose");
const pickup_schema_1 = require("../../core/models/pickup.schema");
const location_schema_1 = require("../../core/models/location.schema");
const pickup_plan_shema_1 = require("../../core/models/pickup-plan.shema");
const user_schema_1 = require("../../core/models/user.schema");
const rxjs_1 = require("rxjs");
const subscription_schema_1 = require("../../core/models/subscription.schema");
let PickupModule = class PickupModule {
};
PickupModule = __decorate([
    (0, common_1.Module)({
        controllers: [pickup_controller_1.PickupController],
        providers: [pickup_service_1.PickupService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: pickup_schema_1.Pickup.name, schema: pickup_schema_1.PickupSchema },
                { name: location_schema_1.Location.name, schema: location_schema_1.LocationSchema },
                { name: pickup_plan_shema_1.PickupPlan.name, schema: pickup_plan_shema_1.PickUpPlanSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: rxjs_1.Subscription.name, schema: subscription_schema_1.subscriptionSchema }
            ]),
        ]
    })
], PickupModule);
exports.PickupModule = PickupModule;
//# sourceMappingURL=pickup.module.js.map