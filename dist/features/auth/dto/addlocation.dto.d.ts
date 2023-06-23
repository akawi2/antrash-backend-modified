import { ObjectId } from "mongoose";
export declare class AddLocation {
    userid: ObjectId;
    location: [Number, Number];
    locationName: string[];
    addressComplement: [];
}
