import { PaymentService } from "./payment.service";
import { Payment } from "src/core/models/payment.schema";
import { AddPayment } from "./dto/addPayment.dto";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    makePayment(addPayment: AddPayment): Promise<Payment>;
    getAllPayments(): Promise<Payment[]>;
    updatePayment(updatedPayment: AddPayment): Promise<Payment>;
}
