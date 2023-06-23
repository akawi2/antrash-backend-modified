import { Model, ObjectId } from "mongoose";
import { NotificationDocument } from "src/core/models/notification.schema";
import { AddNotification } from "./dto/notification.dto";
export declare class NotificationService {
    private notificationModel;
    constructor(notificationModel: Model<NotificationDocument>);
    addNotification(addNotification: AddNotification): Promise<NotificationDocument>;
    updateNotification(id: ObjectId, modifiedNotification: AddNotification): Promise<NotificationDocument>;
}
