import { Model, ObjectId } from 'mongoose';
import { UserDocument } from 'src/core/models/user.schema';
import { SignupDto } from './dto/signup.dto';
import { PhoneVerificationDocument } from 'src/core/models/phone-verification.schema';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginAccessDocument } from 'src/core/models/login-access.schema';
import { AddLocation } from '../locationhandler/dto/addlocation.dto';
import { LocationDocument } from 'src/core/models/location.schema';
import { Profile } from './dto/profile.dto';
export declare class AuthService {
    private userModel;
    private phoneVerificationModel;
    private loginAccessModel;
    private locationModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, phoneVerificationModel: Model<PhoneVerificationDocument>, loginAccessModel: Model<LoginAccessDocument>, locationModel: Model<LocationDocument>, jwtService: JwtService);
    create(dto: SignupDto): Promise<UserDocument>;
    checkPhone(phoneNumber: string): Promise<any>;
    insert(username: string, phonecheck: string): Promise<UserDocument>;
    createPhoneVerification(user: UserDocument): Promise<string>;
    private generateOtp;
    login(signin: SigninDto): Promise<{
        token: string;
    }>;
    recreatePhoneVerification(user: UserDocument): Promise<string>;
    Relogin(signupDto: SignupDto): Promise<UserDocument>;
    disconnect(phoneNumber: String): Promise<UserDocument>;
    addLocation(addLocation: AddLocation): Promise<LocationDocument>;
    getPresentUser(userid: ObjectId): Promise<UserDocument>;
    updateOther(userid: ObjectId, profile: any): Promise<UserDocument>;
    updateProfile(userid: ObjectId, otp: string, profile: Profile): Promise<UserDocument>;
    addAgent(dto: SignupDto): Promise<UserDocument>;
}
