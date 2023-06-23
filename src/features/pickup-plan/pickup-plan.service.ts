import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model, Query } from "mongoose";
import { PickupPlan, pickupPlanDocument } from "src/core/models/pickup-plan.shema";
import { AddPickupPlan } from "./dto/addpickup-plan.dto";
import { Location,LocationDocument } from "src/core/models/location.schema";

@Injectable()
export class PickupPlanService{
    constructor(
        @InjectModel(PickupPlan.name)  private pickupPlanModel: Model<pickupPlanDocument>,
        @InjectModel(Location.name)  private locationModel: Model<LocationDocument>
        ){}
            async addPickupPlan(addPickupPlan: AddPickupPlan,): Promise<pickupPlanDocument>{
                const pick = new this.pickupPlanModel({
                    locationName: addPickupPlan.locationName,
                    time: addPickupPlan.time,
                    userid: addPickupPlan.userid,
                    agentid: addPickupPlan.agentid,
                });
                return pick.save()
            }

            async getAllPickupPlan(): Promise<pickupPlanDocument[]>{
                return this.pickupPlanModel.find().exec();
            }

            async getPickPreview(): Promise<pickupPlanDocument[]>{
                const present = new Date();
                const query = {time: { 
                    $gt: present, 
                    } 
                  };
                const prev = await this.pickupPlanModel.find(query).exec();
                return prev;
            }

            async updatePickupPlan(pickId:string, pick:Partial<PickupPlan>): Promise<pickupPlanDocument>{
                return this.pickupPlanModel.findOneAndUpdate({_id:pickId} , pick, { new: true });
            }

            async deletePickupPlan(id: string): Promise<pickupPlanDocument>{
                const deletePick = await this.pickupPlanModel.findByIdAndDelete(id);
                return deletePick
            }
}
