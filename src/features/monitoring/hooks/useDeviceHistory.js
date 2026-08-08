import { useState, useEffect, useCallback } from "react";

import monitoringService from "../services/monitoringService";

const useDeviceHistory = (
    deviceId,
    {
        hours = null,
        days = null,
    },
) => {

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchHistory = useCallback(async () => {

        if (!deviceId) return;

        try {
            setLoading(true);

            /*
            const data = await monitoringService.getHistory(
                deviceId,
                {
                    hours,
                    days,
                },
            );
            */

            const data = await monitoringService.getHistory(
                deviceId,
                {
                    hours: hours ? Number(hours) : undefined,
                    days: days ? Number(days) : undefined,
                });

            setHistory(data);

            // console.log("History:", data);

        } catch (error) {
            // console.error(error);
        } finally {
            setLoading(false);
        }
    }, [deviceId, hours, days]);

    useEffect(() => {
        fetchHistory();
    }, [fetchHistory]);

    return {
        history,
        loading,
        refresh: fetchHistory,
    };
};

export default useDeviceHistory;