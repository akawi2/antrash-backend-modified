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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let EmailService = class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_FROM,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }
    async sendEmail(otp) {
        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: "Antrash OTP send",
            text: "voici votre OTP " + otp,
        };
        await this.transporter.sendMail(mailOptions);
    }
    async orderEmail(order) {
        let text = "";
        for (const o of order) {
            text = "l'utilisateur avec le username " + o.username + " et le numero de telephone " + o.phoneNumber + " \n vient de faire une commande d'un " + o.name + " \n d'une quantite de " + o.quantity + " \n\nfaisant un total de " + o.cost + " Veuillez visiter votre plateforme pour plus de detail";
        }
        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: "Antrash Order send",
            text: text
        };
        await this.transporter.sendMail(mailOptions);
    }
    async orderAllEmail(order) {
        let text = "l'utilisateur avec le username " + order[0].username + " et le numero de telephone " + order[0].phoneNumber + " \n vient de faire une commande des suivants: \n\n";
        for (let i = 0; i < order[0].productName.length; i++) {
            text = text + order[0].productName[i] + "\t" + order[0].productQuantity[i] + "\n";
        }
        text = text + " \n\nfaisant un total de " + order[0].cost + "\n\n Veuillez visiter votre plateforme pour plus de detail";
        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: "Antrash Order send",
            text: text
        };
        await this.transporter.sendMail(mailOptions);
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=mail.service.js.map