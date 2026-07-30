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
    console.log("DeviceService.create()");
    console.log(device);

    const payload = toCreateDevicePayload(device);

    console.log("Payload");
    console.log(payload);

    const createdDevice = await super.create(payload);

    const extractDeviceData = (value) => {
      if (!value || typeof value !== "object") {
        return null;
      }

      if (value.id && value.name) {
        return value;
      }

      if (value.device) {
        return extractDeviceData(value.device);
      }

      if (value.data) {
        return extractDeviceData(value.data);
      }

      if (value.attributes && typeof value.attributes === "object") {
        return {
          id: value.id,
          ...value.attributes,
        };
      }

      return value;
    };

    const deviceData = extractDeviceData(createdDevice) ?? createdDevice;

    return toDeviceModel(deviceData);
  }

  /**
   * Update device.
   */
  async update(id, device) {
    const payload = toUpdateDevicePayload(device);

    console.log("DeviceService.update()", id, payload);

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
