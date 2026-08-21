import api from "./axios";

const BASE_URL = "/users";

export const getAll = () => {
  return api.get(BASE_URL);
};

export const getById = (id) => {
  return api.get(`${BASE_URL}/${id}`);
};

export const update = (id, payload) => {
  return api.patch(`${BASE_URL}/${id}`, payload);
};

const deleteUser = (id) => {
  return api.delete(`${BASE_URL}/${id}`);
};

export { deleteUser as delete };
