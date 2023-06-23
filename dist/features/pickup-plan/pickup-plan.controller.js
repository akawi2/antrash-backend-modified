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
exports.PickupPlanController = void 0;
const common_1 = require("@nestjs/common");
const pickup_plan_service_1 = require("./pickup-plan.service");
const swagger_1 = require("@nestjs/swagger");
const pickup_plan_shema_1 = require("../../core/models/pickup-plan.shema");
const addpickup_plan_dto_1 = require("./dto/addpickup-plan.dto");
let PickupPlanController = class PickupPlanController {
    constructor(pickupPlanService) {
        this.pickupPlanService = pickupPlanService;
    }
    addPicks(dto) {
        try {
            const addPick = this.pickupPlanService.addPickupPlan(dto);
            return addPick;
        }
        catch (e) {
            throw new Error('You cannot add a pick new up plan');
        }
    }
    allPick() {
        return this.pickupPlanService.getAllPickupPlan();
    }
    previewPick() {
        return this.pickupPlanService.getPickPreview();
    }
    updatePick(id, pickdto) {
        const pickUpdate = this.pickupPlanService.updatePickupPlan(id, { locationName: pickdto.locationName, time: pickdto.time });
        if (!pickUpdate) {
            throw new common_1.NotFoundException("This user can't be updated");
        }
        return pickUpdate;
    }
    delete(id) {
        const deletePick = this.pickupPlanService.deletePickupPlan(id);
        if (!deletePick) {
            throw new common_1.NotFoundException('Pick Up id not found');
        }
        return deletePick;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ type: pickup_plan_shema_1.PickupPlan }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addpickup_plan_dto_1.AddPickupPlan]),
    __metadata("design:returntype", Promise)
], PickupPlanController.prototype, "addPicks", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PickupPlanController.prototype, "allPick", null);
__decorate([
    (0, common_1.Get)('preview'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PickupPlanController.prototype, "previewPick", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, addpickup_plan_dto_1.AddPickupPlan]),
    __metadata("design:returntype", Promise)
], PickupPlanController.prototype, "updatePick", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PickupPlanController.prototype, "delete", null);
PickupPlanController = __decorate([
    (0, swagger_1.ApiTags)('pickupPlan'),
    (0, common_1.Controller)('pickupPlan'),
    __metadata("design:paramtypes", [pickup_plan_service_1.PickupPlanService])
], PickupPlanController);
exports.PickupPlanController = PickupPlanController;
//# sourceMappingURL=pickup-plan.controller.js.map