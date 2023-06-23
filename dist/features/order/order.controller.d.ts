import { OrderService } from "./order.service";
import { Order } from "src/core/models/order.schema";
import { AddOrder } from "./dto/order.dto";
import { ObjectId } from "mongoose";
import { PaymentService } from "../payment/payment.service";
import { EmailService } from "../mail/mail.service";
export declare class OrderController {
    private readonly orderService;
    private readonly paymentService;
    private readonly emailService;
    constructor(orderService: OrderService, paymentService: PaymentService, emailService: EmailService);
    getAllOrders(): Promise<Order[]>;
    addOrder(newOrder: AddOrder): Promise<[Object]>;
    orderAll(userid: {
        userid: ObjectId;
    }): Promise<any>;
}
