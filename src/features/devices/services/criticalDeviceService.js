import BaseService from "../../../services/BaseService";
import * as criticalDeviceApi from "../../../api/criticalDeviceApi";

class CriticalDeviceService extends BaseService {
  constructor() {
    super(criticalDeviceApi);
  }

  async getCriticalDevices() {
    try {
      const response = await criticalDeviceApi.getCriticalDevices();

      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export default new CriticalDeviceService();
