import mongoose, { HydratedDocument, ObjectId } from "mongoose";
export type LocationDocument = HydratedDocument<Location>;
export declare class Location {
    userid: ObjectId;
    location: [
        {
            longitude: number;
            latitude: number;
        }
    ];
    description: string;
    locationName: string[];
    addressComplement: [];
    createdAt: Date;
}
export declare const LocationSchema: mongoose.Schema<Location, mongoose.Model<Location, any, any, any, mongoose.Document<unknown, any, Location> & Omit<Location & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Location, mongoose.Document<unknown, {}, mongoose.FlatRecord<Location>> & Omit<mongoose.FlatRecord<Location> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
