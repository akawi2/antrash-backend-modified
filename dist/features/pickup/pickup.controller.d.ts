import { Pickup } from "src/core/models/pickup.schema";
import { PickupService } from "./pickup.service";
import { PickupAdd } from "./dto/pickupAdd.dto";
import { AddPickupPlan } from "../pickup-plan/dto/addpickup-plan.dto";
export declare class PickupController {
    private readonly pickupService;
    constructor(pickupService: PickupService);
    addPickup(addedPickup: PickupAdd): Promise<Pickup>;
    updatePickup(userid: string, agentid: string, body: {
        check: boolean;
    }): Promise<Pickup>;
    getAllPicks(): Promise<Pickup[]>;
    addExpressPickup(addPickupPlan: AddPickupPlan): Promise<Pickup>;
}
