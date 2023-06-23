import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User, UserDocument } from 'src/core/models/user.schema';
import { SigninDto } from './dto/signin.dto';
import { SmsService } from '../sms/sms.service';
import { EmailService } from '../mail/mail.service';
import { AddLocation } from '../locationhandler/dto/addlocation.dto';
import { Location, LocationDocument } from 'src/core/models/location.schema';
import { Profile } from './dto/profile.dto';
import { ObjectId } from 'mongoose';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly smsService: SmsService, private emailService: EmailService) { }

  @Post('signup')
  @ApiResponse({type: User})
  async register(@Body() signupDto: SignupDto): Promise<UserDocument> {
    try {

      const user = await this.authService.create(signupDto)
      const otp = await this.authService.createPhoneVerification(user)

      // TODO: Send sms
      
      const mail = this.emailService.sendEmail(otp)
      if (!mail){
        throw new Error('Check your internet connection')
      }
     // this.smsService.sendSms(user.phoneNumber, otp)      


      return user;
    } catch (e) {

      //const verificationLogOtp = await this.authService.create(signupDto)

      const verificationLogOtp = await this.authService.Relogin(signupDto)
      const otp =await this.authService.recreatePhoneVerification(verificationLogOtp)
      this.emailService.sendEmail(otp)

      return verificationLogOtp
    }
  }

  @Post('signin')
  @ApiResponse({ type: User })
  async login(@Body() signinDto: SigninDto): Promise<{token: string}> {

    return this.authService.login(signinDto)
  }

  @Delete('delete/:phoneNumber')
  @ApiResponse({type: User})
  async deleteToken(@Param('phoneNumber') phoneNumber:string): Promise<UserDocument>{
    return this.authService.disconnect(phoneNumber)
    
  }
  
  @Post('addLocation')
  @ApiResponse({ type: Location })
  async addLocationUser(@Body() addLoation: AddLocation): Promise<LocationDocument>{
    return this.authService.addLocation(addLoation)
  }

  // @Patch('/modified/:phoneNumber')
  // @ApiResponse({type: User})
  // async ModifyUser(@Param('phoneNumber') phone: string,@Body() modifiedUser: Profile): Promise<UserDocument>{
  //   return this.authService.updateProfile(phone,modifiedUser)
  // }

  @Patch('/profile/:userid')
  @ApiResponse({type: User})
  async modifiedUser(@Param('userid') userid: ObjectId,@Body() profile: Profile): Promise<any>{
   try{
    const newProfile = await this.authService.updateOther(userid, profile)
    return newProfile

   }

   catch(e){
    const user = await this.authService.getPresentUser(userid)
    const otp = await this.authService.createPhoneVerification(user)

    const mail = this.emailService.sendEmail(otp)
    if (!mail){
      throw new Error('Check your internet connection')
    }
    return otp
   }
    

  }

  @Patch('profilephone/:userid/:otp')
  @ApiResponse({type: User})
  async updateProfilePhone(@Param('userid') userid: ObjectId, @Param('otp') otp: string, @Body() profile: Profile): Promise<UserDocument>{
    const userPhoneProfile = await this.authService.updateProfile(userid, otp, profile)
    if (userPhoneProfile){
      return userPhoneProfile

    }else{
      throw new Error('Unknown Error')
    }
  }

  @Post('addAgent')
  @ApiResponse({type: User})
  async addAgent(@Body() dto: SignupDto): Promise<UserDocument>{
    return this.authService.addAgent(dto)
  }


}
