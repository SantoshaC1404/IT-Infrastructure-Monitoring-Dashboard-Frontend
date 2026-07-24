import BaseService from "./BaseService";
import * as deviceApi from "../api/deviceApi";

class DeviceService extends BaseService {
    constructor() {
        super(deviceApi);
    }
}

export default new DeviceService();