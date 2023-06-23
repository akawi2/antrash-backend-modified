import { Model } from "mongoose";
import { LocationDocument } from "src/core/models/location.schema";
import { AddLocation } from "./dto/addlocation.dto";
import { UserDocument } from "src/core/models/user.schema";
export declare class locationhandlerService {
    private locationModel;
    private userModel;
    constructor(locationModel: Model<LocationDocument>, userModel: Model<UserDocument>);
    addLocation(addLocation: AddLocation): Promise<LocationDocument>;
    updateLocation(locationid: string, addLocation: AddLocation): Promise<LocationDocument>;
}
