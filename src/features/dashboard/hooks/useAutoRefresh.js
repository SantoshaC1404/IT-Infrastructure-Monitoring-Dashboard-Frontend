import React, { useEffect } from 'react'

export const useAutoRefresh = ({
    callback,
    enabled = true,
    interval = 30000,
}) => {
    useEffect(() => {
        if (!enabled) return;

        const timer = setInterval(() => {
            callback();
        }, interval);

        // console.log(`Auto-refresh enabled. Refreshing every ${interval / 1000} seconds.`);
        // console.log("Auto-refresh enabled. Refreshing...");

        return () => clearInterval(timer);
    }, [callback, enabled, interval]);
}

export default useAutoRefresh;
