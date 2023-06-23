import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type pickupPlanDocument = HydratedDocument<PickupPlan>;
export declare class PickupPlan {
    location: [Number, Number];
    locationName: string[];
    time: [Date, Date];
    createdAt: Date;
    updated_at: Date;
    deleted_at: Date;
    agentid: ObjectId;
    userid: ObjectId;
}
export declare const PickUpPlanSchema: mongoose.Schema<PickupPlan, mongoose.Model<PickupPlan, any, any, any, mongoose.Document<unknown, any, PickupPlan> & Omit<PickupPlan & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PickupPlan, mongoose.Document<unknown, {}, mongoose.FlatRecord<PickupPlan>> & Omit<mongoose.FlatRecord<PickupPlan> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
