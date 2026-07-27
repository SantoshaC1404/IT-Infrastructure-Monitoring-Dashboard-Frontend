import BaseService from "./BaseService";
import * as deviceApi from "../api/deviceApi";

class DeviceService extends BaseService {
  constructor() {
    super(deviceApi);
  }

  // Test device connection without saving.
  async testConnection(device) {
    try {
      const payload = {
        device_type: device.device_type,
        ip_address: device.ip_address,
        username: device.username,
        password: device.password,
        port: Number(device.ssh_port),
      };

      const response = await this.api.testConnection(payload);

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export default new DeviceService();
