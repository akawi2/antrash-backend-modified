"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SmsService = class SmsService {
    async sendSms(phoneNumber, otp) {
        try {
            const response = await axios_1.default.post(process.env.postSend, {
                user: process.env.user,
                password: process.env.password,
                senderid: process.env.senderid,
                sms: 'Hello from Antrash! Here is your OTP code : ' + otp,
                mobiles: phoneNumber.substring(1),
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
SmsService = __decorate([
    (0, common_1.Injectable)()
], SmsService);
exports.SmsService = SmsService;
//# sourceMappingURL=sms.service.js.map