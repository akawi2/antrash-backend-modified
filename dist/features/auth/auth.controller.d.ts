import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { UserDocument } from 'src/core/models/user.schema';
import { SigninDto } from './dto/signin.dto';
import { SmsService } from '../sms/sms.service';
import { EmailService } from '../mail/mail.service';
import { AddLocation } from '../locationhandler/dto/addlocation.dto';
import { LocationDocument } from 'src/core/models/location.schema';
import { Profile } from './dto/profile.dto';
import { ObjectId } from 'mongoose';
export declare class AuthController {
    private readonly authService;
    private readonly smsService;
    private emailService;
    constructor(authService: AuthService, smsService: SmsService, emailService: EmailService);
    register(signupDto: SignupDto): Promise<UserDocument>;
    login(signinDto: SigninDto): Promise<{
        token: string;
    }>;
    deleteToken(phoneNumber: string): Promise<UserDocument>;
    addLocationUser(addLoation: AddLocation): Promise<LocationDocument>;
    modifiedUser(userid: ObjectId, profile: Profile): Promise<any>;
    updateProfilePhone(userid: ObjectId, otp: string, profile: Profile): Promise<UserDocument>;
    addAgent(dto: SignupDto): Promise<UserDocument>;
}
