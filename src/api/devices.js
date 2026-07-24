import api from "./axios";

const BASE_URL = "/devices";

export const getDevices = () => api.get(BASE_URL);

export const getDeviceById = (id) => api.get(`${BASE_URL}/${id}`);

export const createDevice = (payload) => api.post(BASE_URL, payload);

export const updateDevice = (id, payload) =>
    api.put(`${BASE_URL}/${id}`, payload);

export const deleteDevice = (id) => api.delete(`${BASE_URL}/${id}`);
