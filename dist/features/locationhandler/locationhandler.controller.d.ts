import { locationhandlerService } from "./locationhandler.service";
import { Location, LocationDocument } from "src/core/models/location.schema";
import { AddLocation } from "./dto/addlocation.dto";
export declare class LocationhandlerController {
    private readonly locationService;
    constructor(locationService: locationhandlerService);
    addLocationUser(addLoation: AddLocation): Promise<LocationDocument>;
    updateLocation(id: string, addLocation: AddLocation): Promise<Location>;
}
