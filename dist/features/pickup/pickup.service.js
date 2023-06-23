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
exports.PickupService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pickup_schema_1 = require("../../core/models/pickup.schema");
const pickup_state_schema_1 = require("../../core/models/pickup-state.schema");
const pickup_plan_shema_1 = require("../../core/models/pickup-plan.shema");
const pickup_priority_schema_1 = require("../../core/models/pickup-priority.schema");
const user_schema_1 = require("../../core/models/user.schema");
const profile_type_schema_1 = require("../../core/models/profile-type.schema");
const location_schema_1 = require("../../core/models/location.schema");
const rxjs_1 = require("rxjs");
let PickupService = class PickupService {
    constructor(pickupMoedel, pickupPlanModel, locationModel, userModel, subscriptionModel) {
        this.pickupMoedel = pickupMoedel;
        this.pickupPlanModel = pickupPlanModel;
        this.locationModel = locationModel;
        this.userModel = userModel;
        this.subscriptionModel = subscriptionModel;
    }
    async addExpressPick(addPickupPlan) {
        const pick = new this.pickupPlanModel({
            location: addPickupPlan.location,
            time: addPickupPlan.time,
            userId: addPickupPlan.userid
        });
        const pickupplanadded = pick.save();
        const agent = await this.userModel.find({ profileType: profile_type_schema_1.ProfileType.AGENT });
        let agentGet = null;
        for (const a of agent) {
            agentGet = await this.locationModel.findOne({ location: addPickupPlan.location, userid: a._id });
            if (agentGet) {
                break;
            }
        }
        const pickupadded = new this.pickupMoedel({
            location: addPickupPlan.location,
            status: pickup_state_schema_1.PickupStatus.REQUESTED,
            priority: pickup_priority_schema_1.PickupPriority.HIGH,
            userid: addPickupPlan.userid,
            agentid: "agentGet._id",
            pickupPlan_id: (await pickupplanadded)._id
        });
        return pickupadded.save();
    }
    async addPickup(pickupAdd) {
        const pickupPlan = await this.pickupPlanModel.findOne({ location: pickupAdd.location });
        const subscription = await this.subscriptionModel.findOne({ userid: pickupAdd.userid });
        const today = new Date();
        if (today > subscription.endDate) {
            const pickupadded = new this.pickupMoedel({
                location: pickupAdd.location,
                status: pickup_state_schema_1.PickupStatus.SUSPENDED,
                priority: pickupAdd.priority,
                observation: pickupAdd.observation,
                userid: pickupAdd.userid,
                agentid: pickupAdd.agentid,
                pickupPlan_id: pickupPlan._id
            });
            return pickupadded.save();
        }
        else {
            if (pickupAdd.status == true) {
                const pickup = await this.pickupMoedel.findOne({ pickupPlanid: pickupAdd.pickupPlanid });
                const state = pickup_state_schema_1.PickupStatus.DONE;
                if (pickup) {
                    const pickupadded = new this.pickupMoedel({
                        location: pickupAdd.location,
                        status: state,
                        priority: pickupAdd.priority,
                        observation: pickupAdd.observation,
                        userid: pickupAdd.userid,
                        agentid: pickupAdd.agentid,
                        pickupPlan_id: pickupPlan._id
                    });
                    return pickupadded.save();
                }
                else {
                    const pickupadded = await this.pickupMoedel.findOneAndUpdate({ pickupPlanid: pickupAdd.pickupPlanid }, { status: state }, { new: true });
                    return pickupadded;
                }
            }
            else {
                const pickup = await this.pickupMoedel.findOne({ pickupPlan_id: pickupAdd.pickupPlanid });
                const state = pickup_state_schema_1.PickupStatus.PENDING;
                if (!pickup) {
                    const pickupadded = new this.pickupMoedel({
                        location: pickupAdd.location,
                        status: state,
                        observation: pickupAdd.observation,
                        userid: pickupAdd.userid,
                        agentid: pickupAdd.agentid,
                        pickupPlan_id: pickupPlan._id
                    });
                    return pickupadded.save();
                }
                else {
                    const pickupadded = await this.pickupMoedel.findOneAndUpdate({ pickupPlan_id: pickupAdd.pickupPlanid }, { status: state }, { new: true });
                    return pickupadded;
                }
            }
        }
    }
    async signalPickup(userid, agentid, status) {
        if (status == true) {
            const state = pickup_state_schema_1.PickupStatus.DONE;
            const modifiedPickup = await this.pickupMoedel.findOneAndUpdate({ userid: userid, agentid: agentid }, { status: state }, { new: true });
            return modifiedPickup.save();
        }
        else {
            const state = pickup_state_schema_1.PickupStatus.PENDING;
            const modifiedPickup = await this.pickupMoedel.findOneAndUpdate({ userid: userid, agentid: agentid }, { status: state }, { new: true });
            return modifiedPickup.save();
        }
    }
    async getAllPickup() {
        return this.pickupMoedel.find().exec();
    }
};
PickupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pickup_schema_1.Pickup.name)),
    __param(1, (0, mongoose_1.InjectModel)(pickup_plan_shema_1.PickupPlan.name)),
    __param(2, (0, mongoose_1.InjectModel)(location_schema_1.Location.name)),
    __param(3, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(4, (0, mongoose_1.InjectModel)(rxjs_1.Subscription.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], PickupService);
exports.PickupService = PickupService;
//# sourceMappingURL=pickup.service.js.map