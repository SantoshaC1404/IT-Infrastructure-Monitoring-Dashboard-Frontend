import api from "./axios";

const BASE_URL = "/alerts";

// export const getAll = (params) => {
//   return api.get(BASE_URL, {
//     params,
//   });
// };

// export const getOpen = () => {
//   return api.get(`${BASE_URL}/open`);
// };

// export const acknowledge = (id) => {
//   return api.post(`${BASE_URL}/${id}/acknowledge`);
// };

// export const resolve = (id) => {
//   return api.post(`${BASE_URL}/${id}/resolve`);
// };

export const getAlerts = (limit = 100) => {
  return api.get(`/alerts?limit=${limit}`);
};

export const getOpenAlerts = () => {
  return api.get("/alerts/open");
};

export const acknowledgeAlert = (alertId) => {
  return api.post(`/alerts/${alertId}/acknowledge`);
};

export const resolveAlert = (alertId) => {
  return api.post(`/alerts/${alertId}/resolve`);
};