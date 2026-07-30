import BaseService from "../../../services/BaseService";
import * as dashboardApi from "../../../api/dashboardApi";

import { toDashboardSummary } from "../utils/dashboardMapper";

class DashboardService extends BaseService {
    constructor() {
        super(dashboardApi);
    }

    async getSummary() {
        try {
            const response = await dashboardApi.getSummary();

            console.log("Dashboard API Response:", response.data);

            const mapped = toDashboardSummary(response.data);

            console.log("Mapped Summary:", mapped);

            return mapped;

        } catch (error) {
            throw this.handleError(error);
        }
    }
}

export default new DashboardService();