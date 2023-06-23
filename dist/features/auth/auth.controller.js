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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const signup_dto_1 = require("./dto/signup.dto");
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("../../core/models/user.schema");
const signin_dto_1 = require("./dto/signin.dto");
const sms_service_1 = require("../sms/sms.service");
const mail_service_1 = require("../mail/mail.service");
const addlocation_dto_1 = require("../locationhandler/dto/addlocation.dto");
const location_schema_1 = require("../../core/models/location.schema");
const profile_dto_1 = require("./dto/profile.dto");
let AuthController = class AuthController {
    constructor(authService, smsService, emailService) {
        this.authService = authService;
        this.smsService = smsService;
        this.emailService = emailService;
    }
    async register(signupDto) {
        try {
            const user = await this.authService.create(signupDto);
            const otp = await this.authService.createPhoneVerification(user);
            const mail = this.emailService.sendEmail(otp);
            if (!mail) {
                throw new Error('Check your internet connection');
            }
            return user;
        }
        catch (e) {
            const verificationLogOtp = await this.authService.Relogin(signupDto);
            const otp = await this.authService.recreatePhoneVerification(verificationLogOtp);
            this.emailService.sendEmail(otp);
            return verificationLogOtp;
        }
    }
    async login(signinDto) {
        return this.authService.login(signinDto);
    }
    async deleteToken(phoneNumber) {
        return this.authService.disconnect(phoneNumber);
    }
    async addLocationUser(addLoation) {
        return this.authService.addLocation(addLoation);
    }
    async modifiedUser(userid, profile) {
        try {
            const newProfile = await this.authService.updateOther(userid, profile);
            return newProfile;
        }
        catch (e) {
            const user = await this.authService.getPresentUser(userid);
            const otp = await this.authService.createPhoneVerification(user);
            const mail = this.emailService.sendEmail(otp);
            if (!mail) {
                throw new Error('Check your internet connection');
            }
            return otp;
        }
    }
    async updateProfilePhone(userid, otp, profile) {
        const userPhoneProfile = await this.authService.updateProfile(userid, otp, profile);
        if (userPhoneProfile) {
            return userPhoneProfile;
        }
        else {
            throw new Error('Unknown Error');
        }
    }
    async addAgent(dto) {
        return this.authService.addAgent(dto);
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiResponse)({ type: user_schema_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, swagger_1.ApiResponse)({ type: user_schema_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)('delete/:phoneNumber'),
    (0, swagger_1.ApiResponse)({ type: user_schema_1.User }),
    __param(0, (0, common_1.Param)('phoneNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteToken", null);
__decorate([
    (0, common_1.Post)('addLocation'),
    (0, swagger_1.ApiResponse)({ type: location_schema_1.Location }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addlocation_dto_1.AddLocation]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addLocationUser", null);
__decorate([
    (0, common_1.Patch)('/profile/:userid'),
    (0, swagger_1.ApiResponse)({ type: user_schema_1.User }),
    __param(0, (0, common_1.Param)('userid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, profile_dto_1.Profile]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "modifiedUser", null);
__decorate([
    (0, common_1.Patch)('profilephone/:userid/:otp'),
    (0, swagger_1.ApiResponse)({ type: user_schema_1.User }),
    __param(0, (0, common_1.Param)('userid')),
    __param(1, (0, common_1.Param)('otp')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, profile_dto_1.Profile]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfilePhone", null);
__decorate([
    (0, common_1.Post)('addAgent'),
    (0, swagger_1.ApiResponse)({ type: user_schema_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addAgent", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, sms_service_1.SmsService, mail_service_1.EmailService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map