import api from "./axios";

const BASE_URL = "/devices";

export const getAll = () => {
  return api.get(BASE_URL);
};

export const create = (payload) => {
  return api.post(BASE_URL, payload);
};

export const update = (id, payload) => {
  return api.patch(`${BASE_URL}/${id}`, payload);
};

const deleteDevice = (id) => {
  return api.delete(`${BASE_URL}/${id}`);
};

export { deleteDevice as delete };

export const testConnection = (payload) => {
  return api.post(`${BASE_URL}/test-connection`, payload);
};
