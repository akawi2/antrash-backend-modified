"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const errors_1 = require("../http/errors");
let MongoExceptionFilter = class MongoExceptionFilter {
    catch(exception, host) {
        common_1.Logger.error(exception);
        const response = host.switchToHttp().getResponse();
        switch (exception.code) {
            case 11000:
                response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    message: exception.message,
                    code: errors_1.HttpError.duplicate,
                    details: {
                        fields: Object.keys(exception['keyValue'])
                    },
                });
                break;
            default: response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Wrong data',
                code: errors_1.HttpError.unknown
            });
        }
    }
};
MongoExceptionFilter = __decorate([
    (0, common_1.Catch)(mongodb_1.MongoError)
], MongoExceptionFilter);
exports.MongoExceptionFilter = MongoExceptionFilter;
//# sourceMappingURL=mongoose-exception.filter.js.map