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
exports.LocationhandlerController = void 0;
const common_1 = require("@nestjs/common");
const locationhandler_service_1 = require("./locationhandler.service");
const swagger_1 = require("@nestjs/swagger");
const location_schema_1 = require("../../core/models/location.schema");
const addlocation_dto_1 = require("./dto/addlocation.dto");
let LocationhandlerController = class LocationhandlerController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    async addLocationUser(addLoation) {
        return this.locationService.addLocation(addLoation);
    }
    async updateLocation(id, addLocation) {
        return this.locationService.updateLocation(id, addLocation);
    }
};
__decorate([
    (0, common_1.Post)('addLocation'),
    (0, swagger_1.ApiResponse)({ type: location_schema_1.Location }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addlocation_dto_1.AddLocation]),
    __metadata("design:returntype", Promise)
], LocationhandlerController.prototype, "addLocationUser", null);
__decorate([
    (0, common_1.Put)('updateLocation/:id'),
    (0, swagger_1.ApiResponse)({ type: location_schema_1.Location }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, addlocation_dto_1.AddLocation]),
    __metadata("design:returntype", Promise)
], LocationhandlerController.prototype, "updateLocation", null);
LocationhandlerController = __decorate([
    (0, swagger_1.ApiTags)('location'),
    (0, common_1.Controller)('location'),
    __metadata("design:paramtypes", [locationhandler_service_1.locationhandlerService])
], LocationhandlerController);
exports.LocationhandlerController = LocationhandlerController;
//# sourceMappingURL=locationhandler.controller.js.map