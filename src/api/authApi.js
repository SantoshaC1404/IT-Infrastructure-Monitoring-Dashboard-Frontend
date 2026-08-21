import api from "./axios";

const BASE_URL = "/auth";

export const register = (payload) => {
  return api.post(`${BASE_URL}/register`, payload);
};

export const login = (payload) => {
  return api.post(`${BASE_URL}/login`, payload);
};

export const logout = () => {
  return api.post(`${BASE_URL}/logout`);
};

export const me = () => {
  return api.get(`${BASE_URL}/me`);
};
