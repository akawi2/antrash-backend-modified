import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { locationhandlerService } from "./locationhandler.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Location,LocationDocument } from "src/core/models/location.schema";
import { AddLocation } from "./dto/addlocation.dto";

@ApiTags('location')
@Controller('location')
export class LocationhandlerController{
    constructor(
        private readonly locationService: locationhandlerService 
    ){}

    @Post('addLocation')
    @ApiResponse({ type: Location })
    async addLocationUser(@Body() addLoation: AddLocation): Promise<LocationDocument>{
      return this.locationService.addLocation(addLoation)
    }

    @Put('updateLocation/:id')
    @ApiResponse({type: Location})
    async updateLocation(@Param('id') id: string, @Body() addLocation: AddLocation): Promise<Location>{
        return this.locationService.updateLocation(id, addLocation)
    }
}