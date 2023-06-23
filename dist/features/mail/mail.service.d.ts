export declare class EmailService {
    private transporter;
    constructor();
    sendEmail(otp: string): Promise<void>;
    orderEmail(order: [{
        phoneNumber: string;
        username: string;
        name: Object;
        quantity: number;
        cost: number;
    }]): Promise<void>;
    orderAllEmail(order: [{
        phoneNumber: string;
        username: string;
        productName: string[];
        productQuantity: number[];
        cost: number;
    }]): Promise<void>;
}
