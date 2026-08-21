import { useCallback, useEffect, useState } from "react";

import criticalDeviceService from "../services/criticalDeviceService";

const useCriticalDevices = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCriticalDevices = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await criticalDeviceService.getCriticalDevices();


            setDevices(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch critical devices:", error);

            setError(error);
            setDevices([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCriticalDevices();
    }, [fetchCriticalDevices]);

    return {
        devices,
        count: devices.length,
        loading,
        error,
        refresh: fetchCriticalDevices,
    };
};

export default useCriticalDevices;