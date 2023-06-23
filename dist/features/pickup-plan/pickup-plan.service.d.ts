import { Model } from "mongoose";
import { PickupPlan, pickupPlanDocument } from "src/core/models/pickup-plan.shema";
import { AddPickupPlan } from "./dto/addpickup-plan.dto";
import { LocationDocument } from "src/core/models/location.schema";
export declare class PickupPlanService {
    private pickupPlanModel;
    private locationModel;
    constructor(pickupPlanModel: Model<pickupPlanDocument>, locationModel: Model<LocationDocument>);
    addPickupPlan(addPickupPlan: AddPickupPlan): Promise<pickupPlanDocument>;
    getAllPickupPlan(): Promise<pickupPlanDocument[]>;
    getPickPreview(): Promise<pickupPlanDocument[]>;
    updatePickupPlan(pickId: string, pick: Partial<PickupPlan>): Promise<pickupPlanDocument>;
    deletePickupPlan(id: string): Promise<pickupPlanDocument>;
}
