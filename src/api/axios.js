import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response) {
            return Promise.reject({
                status: error.response.status,
                message:
                    error.response.data?.detail ||
                    error.response.data?.message ||
                    "Something went wrong.",
            });
        }

        if (error.request) {
            return Promise.reject({
                status: 0,
                message: "Unable to connect to the server. Please check your network.",
            });
        }

        return Promise.reject({
            status: 500,
            message: error.message,
        });
    },
);

export default api;
