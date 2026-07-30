import { useCallback, useState, useEffect } from "react";

import dashboardService from "../services/dashboardService";

const EMPTY_SUMMARY = {
    totalDevices: 0,
    onlineDevices: 0,
    offlineDevices: 0,
    monitoringEnabled: 0,
};


const useDashboard = () => {

    const [summary, setSummary] = useState(EMPTY_SUMMARY);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const fetchSummary = useCallback(async () => {

        try {

            setLoading(true);

            const data = await dashboardService.getSummary();

            setSummary(data);

            setError("");

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSummary();
    }, [fetchSummary]);

    return {
        summary,
        loading,
        error,
        refresh: fetchSummary,
    };
};

export default useDashboard;