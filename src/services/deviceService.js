import * as deviceApi from "../api/devices";

class DeviceService {
    async getAll() {
        const response = await deviceApi.getDevices();

        return response.data;
    }

    async getById(id) {
        const response = await deviceApi.getDeviceById(id);

        return response.data;
    }

    async create(payload) {
        const response = await deviceApi.createDevice(payload);

        return response.data;
    }

    async update(id, payload) {
        const response = await deviceApi.updateDevice(id, payload);

        return response.data;
    }

    async delete(id) {
        await deviceApi.deleteDevice(id);
    }
}

export default new DeviceService();
