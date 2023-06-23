import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class AddPickupPlan{
    @ApiProperty({type:[]})
    @IsNotEmpty()
    locationName: string[]

    @ApiProperty({type:[Number,Number]})
    @IsNotEmpty()
    location: [Number,Number] 

    @ApiProperty()
    @IsNotEmpty()
    time : [Date,Date]

    @ApiProperty({nullable: false})
    agentid: ObjectId

    @ApiProperty({nullable: true })
    userid : ObjectId


}