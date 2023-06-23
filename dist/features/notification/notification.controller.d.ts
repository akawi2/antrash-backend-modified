import { NotificationService } from "./notification.service";
import { NotificationDocument } from "src/core/models/notification.schema";
import { AddNotification } from "./dto/notification.dto";
import { ObjectId } from "mongoose";
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    addNotification(addNotification: AddNotification): Promise<NotificationDocument>;
    updateNotification(notificationid: ObjectId, modifiedNotification: AddNotification): Promise<NotificationDocument>;
}
