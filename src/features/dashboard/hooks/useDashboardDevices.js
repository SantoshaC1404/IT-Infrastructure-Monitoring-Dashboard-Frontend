import { useCallback, useState, useEffect } from "react";

import dashboardService from "../services/dashboardService";



const useDashboardDevices = () => {

    const [loading, setLoading] = useState(false);

    const [devices, setDevices] = useState([]);

    const [error, setError] = useState("");

    const fetchDevices = useCallback(async () => {
        try {

            setLoading(true);

            const data = await dashboardService.getDevices();

            setDevices(data);

            setError("");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchDevices();
    }, [fetchDevices]);

    return {
        devices,
        loading,
        error,
        refresh: fetchDevices,
    }

}

export default useDashboardDevices