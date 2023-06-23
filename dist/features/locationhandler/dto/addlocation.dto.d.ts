import { ObjectId } from "mongoose";
export declare class AddLocation {
    userid: ObjectId;
    location: [
        {
            longitude: number;
            latitude: number;
        }
    ];
    locationName: string[];
    addressComplement: [];
}
