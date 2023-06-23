import { Model } from "mongoose";
import { Pickup, pickupDocument } from "src/core/models/pickup.schema";
import { PickupAdd } from "./dto/pickupAdd.dto";
import { AddPickupPlan } from "../pickup-plan/dto/addpickup-plan.dto";
import { pickupPlanDocument } from "src/core/models/pickup-plan.shema";
import { UserDocument } from "src/core/models/user.schema";
import { LocationDocument } from "src/core/models/location.schema";
import { subscriptionDocument } from "src/core/models/subscription.schema";
export declare class PickupService {
    private pickupMoedel;
    private pickupPlanModel;
    private locationModel;
    private userModel;
    private subscriptionModel;
    constructor(pickupMoedel: Model<pickupDocument>, pickupPlanModel: Model<pickupPlanDocument>, locationModel: Model<LocationDocument>, userModel: Model<UserDocument>, subscriptionModel: Model<subscriptionDocument>);
    addExpressPick(addPickupPlan: AddPickupPlan): Promise<Pickup>;
    addPickup(pickupAdd: PickupAdd): Promise<pickupDocument>;
    signalPickup(userid: string, agentid: string, status: boolean): Promise<Pickup>;
    getAllPickup(): Promise<Pickup[]>;
}
