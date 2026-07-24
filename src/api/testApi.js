import api from "./axios";

export const healthCheck = async () => {
    const response = await api.get("/health");
    return response.data;
};