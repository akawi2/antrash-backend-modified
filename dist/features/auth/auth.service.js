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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../core/models/user.schema");
const profile_type_schema_1 = require("../../core/models/profile-type.schema");
const phone_verification_schema_1 = require("../../core/models/phone-verification.schema");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const login_access_schema_1 = require("../../core/models/login-access.schema");
const location_schema_1 = require("../../core/models/location.schema");
const hash_1 = require("../../shared/constants/hash");
let AuthService = class AuthService {
    constructor(userModel, phoneVerificationModel, loginAccessModel, locationModel, jwtService) {
        this.userModel = userModel;
        this.phoneVerificationModel = phoneVerificationModel;
        this.loginAccessModel = loginAccessModel;
        this.locationModel = locationModel;
        this.jwtService = jwtService;
    }
    async create(dto) {
        if (dto.profileType == profile_type_schema_1.ProfileType.ADMIN || dto.profileType == profile_type_schema_1.ProfileType.SUPER_ADMIN) {
            throw new common_1.BadRequestException('Cannot create an account as an administrator');
        }
        const phone = await this.checkPhone(dto.phoneNumber);
        const user = await this.insert(dto.username, phone);
        return user.save();
    }
    async checkPhone(phoneNumber) {
        if (phoneNumber.length == 13 && phoneNumber.substring(0, 4) == "+237") {
            return phoneNumber;
        }
        else if (phoneNumber.length == 9 && phoneNumber.charAt(0) == "6") {
            const phonecheck = '+237' + phoneNumber;
            return phonecheck;
        }
        else {
            throw new SyntaxError("You have entered an invalid number try again");
        }
    }
    async insert(username, phonecheck) {
        if (!username) {
            throw new Error('Zero');
        }
        const user = new this.userModel({
            username: username,
            phoneNumber: phonecheck
        });
        return user;
    }
    async createPhoneVerification(user) {
        let otp = this.generateOtp(6);
        const otpChanged = bcrypt.hashSync(otp, hash_1.hashConstants.bcryptSaltOrRounds);
        const modifiedUser = await this.phoneVerificationModel.findOne({ userId: user._id });
        if (modifiedUser) {
            await this.phoneVerificationModel.findOneAndUpdate({ userId: user._id }, { otp: otpChanged }, { new: true });
        }
        else {
            const verification = new this.phoneVerificationModel({
                userId: user._id,
                otp: otp,
                timestamp: new Date()
            });
            await verification.save();
        }
        return otp;
    }
    generateOtp(length) {
        const characters = '0123456789';
        let otp = '';
        for (let i = 0; i < length; i++) {
            otp += characters[Math.floor(Math.random() * characters.length)];
        }
        return otp;
    }
    async login(signin) {
        const user = await this.userModel.findOne({ phoneNumber: signin.phoneNumber });
        const userVerification = await this.phoneVerificationModel.findOne({ userId: user._id });
        if (!user) {
            throw new Error('You are not registered in the database');
        }
        const isOtpValid = await bcrypt.compare(signin.otp, userVerification.otp);
        if (!isOtpValid) {
            throw new Error('Wrong OTP, please try again');
        }
        const token = this.jwtService.sign({ id: user._id });
        const loginAccess = new this.loginAccessModel({
            phoneNumber: signin.phoneNumber,
            token: token
        });
        await loginAccess.save();
        return { token };
    }
    async recreatePhoneVerification(user) {
        const phone = await this.checkPhone(user.phoneNumber);
        const otpGenerated = this.generateOtp(6);
        const verificationLogOtp = await this.phoneVerificationModel.findOneAndUpdate({ userId: user._id }, { otp: otpGenerated }, { new: true });
        verificationLogOtp.save();
        return otpGenerated;
    }
    async Relogin(signupDto) {
        const user = await this.userModel.findOne({ phoneNumber: '+237' + signupDto.phoneNumber });
        if (!user) {
            throw new Error('User not found');
        }
        if (signupDto.username != user.username) {
            const userRelogin = await this.userModel.findOneAndUpdate({ _id: user.id }, { username: signupDto.username, updatedAt: Date.now() }, { new: true });
            userRelogin.save();
            return userRelogin;
        }
        else {
            return user;
        }
    }
    async disconnect(phoneNumber) {
        const deletedUser = await this.loginAccessModel.deleteOne({ phoneNumber }).exec();
        if (deletedUser.deletedCount === 0) {
            throw new common_1.NotFoundException(`User with phone number ${phoneNumber} not found`);
        }
        return this.userModel.findOne({ phoneNumber }).exec();
    }
    async addLocation(addLocation) {
        const userLocation = await this.userModel.findOne({ _id: addLocation.userid });
        const userLocationAdded = await this.locationModel.findOneAndUpdate({ userid: addLocation.userid }, {
            userid: addLocation.userid,
            location: addLocation.location
        }, { new: true });
        return userLocationAdded;
    }
    async getPresentUser(userid) {
        const user = await this.userModel.findOne({ _id: userid });
        return user;
    }
    async updateOther(userid, profile) {
        const user = await this.userModel.findOne({ _id: userid });
        if (profile.phoneNumber == user.phoneNumber) {
            const newProfile = await this.userModel.findOneAndUpdate({ _id: userid }, {
                username: profile.username,
                email: profile.email
            }, { new: true });
            return newProfile;
        }
        else {
            throw new Error("PhoneNumber changed");
        }
    }
    async updateProfile(userid, otp, profile) {
        const userVerification = await this.phoneVerificationModel.findOne({ userId: userid });
        const isOtpValid = await bcrypt.compare(otp, userVerification.otp);
        if (isOtpValid) {
            const userModified = this.userModel.findOneAndUpdate({ _id: userid }, {
                username: profile.username,
                phoneNumber: profile.phoneNumber,
                email: profile.email
            }, { new: true });
            return userModified;
        }
        else {
            throw new Error('Wrong otp');
        }
    }
    async addAgent(dto) {
        const agent = new this.userModel({
            username: dto.username,
            phoneNumber: dto.phoneNumber,
            profileType: profile_type_schema_1.ProfileType.AGENT
        });
        return agent.save();
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(phone_verification_schema_1.PhoneVerification.name)),
    __param(2, (0, mongoose_1.InjectModel)(login_access_schema_1.LoginAccess.name)),
    __param(3, (0, mongoose_1.InjectModel)(location_schema_1.Location.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map