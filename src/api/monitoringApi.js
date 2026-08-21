import api from "./axios";

const BASE_URL = "/devices";

export const getHistory = (deviceId, params = {}) => {
  return api.get(`${BASE_URL}/${deviceId}/history`, { params });
};

// Monitoring thresholds (CPU/memory/disk). Configurable via
// VITE_THRESHOLDS_ENDPOINT since the backend doesn't expose a fixed
// route for this yet; monitoringService falls back to safe defaults
// if the request fails.
// export const getThresholds = () => {
//   const path = import.meta.env.VITE_THRESHOLDS_ENDPOINT || "/monitoring/thresholds";
//   return api.get(path);
// };
