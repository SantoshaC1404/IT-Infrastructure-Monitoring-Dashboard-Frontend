import { useCallback, useState, useEffect, useRef } from "react";

import dashboardService from "../services/dashboardService";
import useAutoRefresh from "./useAutoRefresh";

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

    const [lastUpdated, setLastUpdated] = useState("-");

    // const loadingRefresh = useRef(false);

    const fetchSummary = useCallback(async () => {

        // if (loadingRefresh.current) return;

        // loadingRefresh.current = true;

        try {

            setLoading(true);

            const data = await dashboardService.getSummary();

            setSummary(data);

            const now = new Date().toLocaleTimeString();
            setLastUpdated(now);

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

    useAutoRefresh({
        callback: fetchSummary,
        interval: 30000,
    });

    return {
        summary,
        loading,
        error,
        refresh: fetchSummary,
        lastUpdated,
    };
};

export default useDashboard;