import { ObjectId } from "mongoose";
import { PickupPriority } from "src/core/models/pickup-priority.schema";
export declare class PickupAdd {
    location: [Number, Number];
    status: Boolean;
    priority: PickupPriority;
    observation: string;
    pickupPlanid: ObjectId;
    userid: ObjectId;
    agentid: ObjectId;
}
