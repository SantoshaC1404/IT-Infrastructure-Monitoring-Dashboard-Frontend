import BaseService from "../../../services/BaseService";
import * as dashboardApi from "../../../api/dashboardApi";

import { toDashboardSummary, toDashboardDevices } from "../utils/dashboardMapper";

class DashboardService extends BaseService {
    constructor() {
        super(dashboardApi);
    }


    async getSummary() {
        try {
            const response = await dashboardApi.getSummary();

            // console.log("Dashboard API Response:", response.data);

            const mapped = toDashboardSummary(response.data);

            // console.log("Mapped Summary:", mapped);

            return mapped;

        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getDevices() {
        try {
            const response = await dashboardApi.getDevices();

            // console.log("Dashboard Device API Response:", response.data);

            const mapped = toDashboardDevices(response.data);

            // console.log("Mapped devices: ", mapped);

            return mapped;
        } catch (error) {
            throw this.handleError(error);
        }
    }
}

export default new DashboardService();