import { WalletService } from "./wallet.service";
import { AddWallet } from "./dto/addwallet.dto";
export declare class WalletController {
    private walletService;
    constructor(walletService: WalletService);
    Recharge(addWallet: AddWallet): Promise<string>;
}
