import { PickupPlanService } from "./pickup-plan.service";
import { pickupPlanDocument } from "src/core/models/pickup-plan.shema";
import { AddPickupPlan } from "./dto/addpickup-plan.dto";
export declare class PickupPlanController {
    private readonly pickupPlanService;
    constructor(pickupPlanService: PickupPlanService);
    addPicks(dto: AddPickupPlan): Promise<pickupPlanDocument>;
    allPick(): Promise<pickupPlanDocument[]>;
    previewPick(): Promise<pickupPlanDocument[]>;
    updatePick(id: string, pickdto: AddPickupPlan): Promise<pickupPlanDocument>;
    delete(id: string): Promise<pickupPlanDocument>;
}
