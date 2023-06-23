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
exports.PickupPlanService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pickup_plan_shema_1 = require("../../core/models/pickup-plan.shema");
const location_schema_1 = require("../../core/models/location.schema");
let PickupPlanService = class PickupPlanService {
    constructor(pickupPlanModel, locationModel) {
        this.pickupPlanModel = pickupPlanModel;
        this.locationModel = locationModel;
    }
    async addPickupPlan(addPickupPlan) {
        const pick = new this.pickupPlanModel({
            locationName: addPickupPlan.locationName,
            time: addPickupPlan.time,
            userid: addPickupPlan.userid,
            agentid: addPickupPlan.agentid,
        });
        return pick.save();
    }
    async getAllPickupPlan() {
        return this.pickupPlanModel.find().exec();
    }
    async getPickPreview() {
        const present = new Date();
        const query = { time: {
                $gt: present,
            }
        };
        const prev = await this.pickupPlanModel.find(query).exec();
        return prev;
    }
    async updatePickupPlan(pickId, pick) {
        return this.pickupPlanModel.findOneAndUpdate({ _id: pickId }, pick, { new: true });
    }
    async deletePickupPlan(id) {
        const deletePick = await this.pickupPlanModel.findByIdAndDelete(id);
        return deletePick;
    }
};
PickupPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pickup_plan_shema_1.PickupPlan.name)),
    __param(1, (0, mongoose_1.InjectModel)(location_schema_1.Location.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PickupPlanService);
exports.PickupPlanService = PickupPlanService;
//# sourceMappingURL=pickup-plan.service.js.map