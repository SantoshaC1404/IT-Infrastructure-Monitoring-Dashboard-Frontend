import api from "./axios";

const BASE_URL = "/devices";


// Get history of a device
export const getHistory = (
    deviceId,
    params = {},
) => {
    return api.get(`${BASE_URL}/${deviceId}/history`, { params });
}


// Get Critical Devices List
export const getCriticalDevices = () => {
    return api.get(`${BASE_URL}/critical`);
}

// Get monitoring thresholds (backend-provided)
export const getThresholds = () => {
    // Backend may expose thresholds at /monitoring/thresholds or similar;
    // use a dedicated endpoint under /monitoring for compatibility.
    return api.get(`/monitoring/thresholds`);
}
