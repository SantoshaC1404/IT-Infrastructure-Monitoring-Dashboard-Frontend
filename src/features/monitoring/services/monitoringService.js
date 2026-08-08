import BaseService from "../../../services/BaseService";
import * as monitoringApi from "../../../api/monitoringApi";

import { toCriticalDevices, toHistory } from "../utils/monitoringMapper";


class MonitoringService extends BaseService {

    constructor() {
        super(monitoringApi);
    }

    async getHistory(deviceId, filters) {
        try {
            const response = await monitoringApi.getHistory(
                deviceId,
                filters,
            );

            // console.log("API Response:", response.data);

            // return toHistory(response.data);

            const mapped = toHistory(response.data);

            // console.log("Mapped:", mapped);

            return mapped;

        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get critical devices
    async getCriticalDevices() {
        try {
            const response = await monitoringApi.getCriticalDevices();
            return toCriticalDevices(response?.data ?? {});
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get thresholds from backend (fallback to defaults handled by mapper)
    async getThresholds() {
        try {
            const response = await monitoringApi.getThresholds();

            const payload = response?.data ?? {};

            return {
                cpu: Number(payload.cpu_threshold ?? payload.CPU_THRESHOLD ?? payload.cpu ?? 95),
                memory: Number(payload.memory_threshold ?? payload.MEMORY_THRESHOLD ?? payload.memory ?? 90),
                disk: Number(payload.disk_threshold ?? payload.DISK_THRESHOLD ?? payload.disk ?? 90),
            };
        } catch (error) {
            // If backend doesn't provide thresholds, fall back to safe defaults
            return { cpu: 95, memory: 90, disk: 90 };
        }
    }
}

export default new MonitoringService();
