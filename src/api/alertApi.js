import api from "./axios";

const BASE_URL = "/alerts";

/**
 * Get latest alerts
 */
export const getAlerts = (limit = 100) => {
  return api.get(BASE_URL, {
    params: {
      limit,
    },
  });
};

/**
 * Get unresolved/open alerts
 */
export const getOpenAlerts = () => {
  return api.get(`${BASE_URL}/open`);
};

/**
 * Acknowledge an alert
 */
export const acknowledgeAlert = (alertId) => {
  return api.post(`${BASE_URL}/${alertId}/acknowledge`);
};

/**
 * Resolve an alert
 */
export const resolveAlert = (alertId) => {
  return api.post(`${BASE_URL}/${alertId}/resolve`);
};
