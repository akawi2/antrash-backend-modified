import { PickupStatus } from "./pickup-state.schema";
import { PickupPriority } from "./pickup-priority.schema";
import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type pickupDocument = HydratedDocument<Pickup>;
export declare class Pickup {
    pickupPlanid: ObjectId;
    location: [Number, Number];
    completedAt: Date;
    status: PickupStatus;
    priority: PickupPriority;
    observation: string;
    userid: ObjectId;
    agentid: ObjectId;
    paymentid: ObjectId;
    notes: number;
}
export declare const PickupSchema: mongoose.Schema<Pickup, mongoose.Model<Pickup, any, any, any, mongoose.Document<unknown, any, Pickup> & Omit<Pickup & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Pickup, mongoose.Document<unknown, {}, mongoose.FlatRecord<Pickup>> & Omit<mongoose.FlatRecord<Pickup> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
