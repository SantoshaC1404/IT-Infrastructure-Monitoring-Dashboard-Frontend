import * as alertApi from "../../../api/alertApi";

class AlertService {
  /**
   * Get latest alerts
   */
  async getAlerts(limit = 100) {
    const response = await alertApi.getAlerts(limit);

    return response.data ?? [];
  }

  /**
   * Get unresolved/open alerts
   */
  async getOpenAlerts() {
    const response = await alertApi.getOpenAlerts();

    return response.data ?? [];
  }

  /**
   * Acknowledge alert
   */
  async acknowledgeAlert(alertId) {
    const response = await alertApi.acknowledgeAlert(alertId);

    return response.data;
  }

  /**
   * Resolve alert
   */
  async resolveAlert(alertId) {
    const response = await alertApi.resolveAlert(alertId);

    return response.data;
  }
}

export default new AlertService();
