import BaseService from "../../../services/BaseService";
import * as deviceApi from "../../../api/deviceApi";

import {
  toCreateDevicePayload,
  toUpdateDevicePayload,
  toTestConnectionPayload,
  toDeviceModel,
  toDeviceListModel,
} from "../utils/deviceMapper";

class DeviceService extends BaseService {
  constructor() {
    super(deviceApi);
  }

  /**
   * Get all devices.
   */
  async getAll() {
    const devices = await super.getAll();

    return toDeviceListModel(devices);
  }

  /**
   * Get device by id.
   */
  async getById(id) {
    const device = await super.getById(id);

    return toDeviceModel(device);
  }

  /**
   * Create device.
   */
  async create(device) {
    const payload = toCreateDevicePayload(device);

    const createdDevice = await super.create(payload);

    return toDeviceModel(createdDevice);
  }

  /**
   * Update device.
   */
  async update(id, device) {
    const payload = toUpdateDevicePayload(device);

    const updatedDevice = await super.update(id, payload);

    return toDeviceModel(updatedDevice);
  }

  /**
   * Delete device.
   */
  async delete(id) {
    return super.delete(id);
  }

  /**
   * Test device connection.
   */
  async testConnection(device) {
    try {
      const payload = toTestConnectionPayload(device);

      const response = await this.api.testConnection(payload);

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export default new DeviceService();
