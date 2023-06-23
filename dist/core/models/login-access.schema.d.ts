/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from "mongoose";
export type LoginAccessDocument = HydratedDocument<LoginAccess>;
export declare class LoginAccess {
    phoneNumber: string;
    token: string;
    createdAt: Date;
}
export declare const LoginAccessSchema: import("mongoose").Schema<LoginAccess, import("mongoose").Model<LoginAccess, any, any, any, import("mongoose").Document<unknown, any, LoginAccess> & Omit<LoginAccess & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LoginAccess, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LoginAccess>> & Omit<import("mongoose").FlatRecord<LoginAccess> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
