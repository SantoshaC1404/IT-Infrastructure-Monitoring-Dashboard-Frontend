import api from "./axios";

const BASE_URL = "/devices";

export const getAll = () => api.get(BASE_URL);

export const getById = (id) =>
    api.get(`${BASE_URL}/${id}`);

export const create = (payload) =>
    api.post(BASE_URL, payload);

export const update = (id, payload) =>
    api.put(`${BASE_URL}/${id}`, payload);

const deleteDevice = (id) =>
    api.delete(`${BASE_URL}/${id}`);

export { deleteDevice as delete };