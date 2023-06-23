import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { PickupStatus } from "./pickup-state.schema";
import { PickupPriority } from "./pickup-priority.schema";
import mongoose, { HydratedDocument, ObjectId } from "mongoose";


export type pickupDocument = HydratedDocument<Pickup>

@Schema()
export class Pickup{
    @ApiProperty({required: true})
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, unique:true })
    pickupPlanid: ObjectId 

    @ApiProperty({required: true})
    @Prop({})
    location:  [Number, Number]   
    
    @ApiProperty({required: true})
    @Prop({type: Date, default: Date.now()})
    completedAt: Date
    
    @ApiProperty({enum: PickupStatus})
    @Prop({default: PickupStatus.SUSPENDED})
    status: PickupStatus

    @ApiProperty({enum: PickupPriority})
    @Prop({default: PickupPriority.NORMAL})
    priority: PickupPriority

    @ApiProperty()
    @Prop()
    observation: string

    @ApiProperty({required: true})
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    userid: ObjectId 

    @ApiProperty({required: true})
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId})
    agentid: ObjectId

    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId})
    paymentid: ObjectId

    @ApiProperty()
    @Prop()
    notes: number 
}

export const PickupSchema = SchemaFactory.createForClass(Pickup)