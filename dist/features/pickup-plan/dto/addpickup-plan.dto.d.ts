import { ObjectId } from "mongoose";
export declare class AddPickupPlan {
    locationName: string[];
    location: [Number, Number];
    time: [Date, Date];
    agentid: ObjectId;
    userid: ObjectId;
}
