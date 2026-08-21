import BaseService from "../../../services/BaseService";
import * as monitoringApi from "../../../api/monitoringApi";

import { toHistory } from "../utils/monitoringMapper";

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

            const mapped = toHistory(response.data);

            return mapped;

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
