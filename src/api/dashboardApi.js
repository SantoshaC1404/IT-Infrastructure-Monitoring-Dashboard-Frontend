import api from "./axios";

const BASE_URL = "/dashboard";

export const getSummary = () => {
  return api.get(`${BASE_URL}/summary`);
};

export const getDevices = () => {
  return api.get(`${BASE_URL}/devices`);
};
