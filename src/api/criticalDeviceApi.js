import api from "./axios";

const BASE_URL = "/devices";

export const getCriticalDevices = () => {
    return api.get(`${BASE_URL}/critical-devices`);
};