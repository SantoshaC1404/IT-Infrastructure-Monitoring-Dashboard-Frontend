import BaseService from "./BaseService";
import * as notificationApi from "../api/notificationApi";

class NotificationService extends BaseService {
    constructor() {
        super(notificationApi);
    }
}

export default new NotificationService();