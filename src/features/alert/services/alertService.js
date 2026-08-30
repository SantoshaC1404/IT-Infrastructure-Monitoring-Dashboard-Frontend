import * as alertApi from "../../../api/alertApi";

class AlertService {
  async getAlerts(limit = 100) {
    const response = await alertApi.getAlerts(limit);

    return response.data ?? [];
  }

  async getOpenAlerts() {
    const response = await alertApi.getOpenAlerts();

    return response.data ?? [];
  }

  async acknowledgeAlert(alertId) {
    const response = await alertApi.acknowledgeAlert(alertId);

    return response.data;
  }

  async resolveAlert(alertId) {
    const response = await alertApi.resolveAlert(alertId);

    return response.data;
  }
}

export default new AlertService();
