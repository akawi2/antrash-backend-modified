import { Model } from "mongoose";
import { WalletDocument } from "src/core/models/wallet.schema";
import { AddWallet } from "./dto/addwallet.dto";
export declare class WalletService {
    private walletModel;
    constructor(walletModel: Model<WalletDocument>);
    Recharge(addToWallet: AddWallet): Promise<string>;
}
