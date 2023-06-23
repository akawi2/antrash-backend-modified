import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Pickup, pickupDocument } from "src/core/models/pickup.schema";
import { PickupAdd } from "./dto/pickupAdd.dto";
import { PickupStatus } from "src/core/models/pickup-state.schema";
import { AddPickupPlan } from "../pickup-plan/dto/addpickup-plan.dto";
import { PickupPlan, pickupPlanDocument } from "src/core/models/pickup-plan.shema";
import { PickupPriority } from "src/core/models/pickup-priority.schema";
import { User, UserDocument } from "src/core/models/user.schema";
import { ProfileType } from "src/core/models/profile-type.schema";
import { Location, LocationDocument } from "src/core/models/location.schema";
import { Subscription } from "rxjs";
import { subscriptionDocument } from "src/core/models/subscription.schema";

@Injectable()
export class PickupService{
        constructor(
            @InjectModel(Pickup.name) private pickupMoedel: Model<pickupDocument>,
            @InjectModel(PickupPlan.name) private pickupPlanModel: Model<pickupPlanDocument>,
            @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
            @InjectModel(User.name) private userModel: Model<UserDocument>,
            @InjectModel(Subscription.name) private subscriptionModel:Model<subscriptionDocument>

        ){}
        
   async addExpressPick(addPickupPlan: AddPickupPlan): Promise<Pickup>{
        const pick = new this.pickupPlanModel({
            location: addPickupPlan.location,
            time: addPickupPlan.time,
            userId: addPickupPlan.userid
        });
        const pickupplanadded = pick.save()
        const agent = await this.userModel.find({profileType: ProfileType.AGENT})
        let agentGet = null
        for (const a of agent){
         agentGet = await this.locationModel.findOne({location: addPickupPlan.location, userid: a._id})
            if (agentGet){
                break
            }       
        }

        const pickupadded = new this.pickupMoedel({
            location: addPickupPlan.location,
            status: PickupStatus.REQUESTED,
            priority: PickupPriority.HIGH,
            userid: addPickupPlan.userid,
            agentid: "agentGet._id",
            pickupPlan_id:(await pickupplanadded)._id
        })
        return pickupadded.save()
    
   }

    async addPickup(pickupAdd: PickupAdd): Promise<pickupDocument>{
        const pickupPlan = await this.pickupPlanModel.findOne({location:pickupAdd.location})
        const subscription = await this.subscriptionModel.findOne({userid:pickupAdd.userid})
        const today= new Date()
       if (today > subscription.endDate ){
        const pickupadded = new this.pickupMoedel({
            location: pickupAdd.location,
            status: PickupStatus.SUSPENDED,
            priority: pickupAdd.priority,
            observation: pickupAdd.observation,
            userid: pickupAdd.userid,
            agentid: pickupAdd.agentid,
            pickupPlan_id: pickupPlan._id
        })
        return pickupadded.save()
       }
       else{
        if (pickupAdd.status == true){
            const pickup = await this.pickupMoedel.findOne({pickupPlanid: pickupAdd.pickupPlanid})
            const state = PickupStatus.DONE
           if (pickup) {
            const pickupadded = new this.pickupMoedel({
                location: pickupAdd.location,
                status: state,
                priority: pickupAdd.priority,
                observation: pickupAdd.observation,
                userid: pickupAdd.userid,
                agentid: pickupAdd.agentid,
                pickupPlan_id: pickupPlan._id
            })
            return pickupadded.save()}
           else {
            const pickupadded = await this.pickupMoedel.findOneAndUpdate({pickupPlanid: pickupAdd.pickupPlanid},
                {status: state},
                {new: true})
                return pickupadded
            }

        }
        else{
            const pickup = await this.pickupMoedel.findOne({pickupPlan_id: pickupAdd.pickupPlanid})
            const state = PickupStatus.PENDING
          if(!pickup){
            const pickupadded = new this.pickupMoedel({
                location: pickupAdd.location,
                status: state,
                observation: pickupAdd.observation,
                userid: pickupAdd.userid,
                agentid: pickupAdd.agentid,
                pickupPlan_id: pickupPlan._id

            })
            return pickupadded.save()
        }
        else{
            const pickupadded = await this.pickupMoedel.findOneAndUpdate({pickupPlan_id: pickupAdd.pickupPlanid},
                {status: state},
                {new: true})
                return pickupadded
        }

        }
       }
    }

    async signalPickup(userid: string, agentid: string, status: boolean): Promise<Pickup>{

        if(status == true){ 
            const state = PickupStatus.DONE
            const modifiedPickup = await this.pickupMoedel.findOneAndUpdate({userid: userid, agentid:agentid},{status:state},{new:true})
            return modifiedPickup.save()

        }
        else{
            const state = PickupStatus.PENDING
            const modifiedPickup = await this.pickupMoedel.findOneAndUpdate({userid: userid, agentid:agentid},{status:state},{new:true})
            return modifiedPickup.save()
        }
    }

    async getAllPickup(): Promise<Pickup[]>{
        return this.pickupMoedel.find().exec()
    }
}