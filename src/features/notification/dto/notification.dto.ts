import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AddNotification{
    @ApiProperty()
    @IsNotEmpty()
    title: {
        french: string,
        english: string
    }

    @ApiProperty()
    @IsNotEmpty()
    message: {
        french: string,
        english: string
    } 

    @ApiProperty()
    @IsNotEmpty()
    dateFrom: Date

    @ApiProperty()
    @IsNotEmpty()
    dateTill: Date

}

