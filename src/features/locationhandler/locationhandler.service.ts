import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Location,LocationDocument } from "src/core/models/location.schema"
import { AddLocation } from "./dto/addlocation.dto"
import { User, UserDocument } from "src/core/models/user.schema"
import { Injectable } from "@nestjs/common"

@Injectable()
export class locationhandlerService
{
    constructor(
       @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
       @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}

    async addLocation (addLocation: AddLocation): Promise<LocationDocument>{
   // const userLocation = await this.userModel.findOne({_id: addLocation.userid})
    const userLocationAdded = new this.locationModel({
            userid: addLocation.userid,
            location: addLocation.location,
            locationName: addLocation.locationName,
            addressComplement: addLocation.addressComplement})
     return userLocationAdded.save()
  
    }

    async updateLocation(locationid: string, addLocation: AddLocation): Promise<LocationDocument>{
        const location = await this.locationModel.findOneAndUpdate({_id: locationid}, addLocation,{new: true})
        return location
    }


}