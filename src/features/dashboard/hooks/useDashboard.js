import { useCallback, useState, useEffect } from "react";

import dashboardService from "../services/dashboardService";
import useAutoRefresh from "./useAutoRefresh";

const EMPTY_SUMMARY = {
  totalDevices: 0,
  onlineDevices: 0,
  offlineDevices: 0,
  monitoringEnabled: 0,
  monitoringDisabled: 0,
  criticalDevices: 0,
  alerts: 0,
};

const useDashboard = () => {
  const [summary, setSummary] = useState(EMPTY_SUMMARY);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [lastUpdated, setLastUpdated] = useState("-");

  const fetchSummary = useCallback(async () => {
    try {
      setLoading(true);

      const data = await dashboardService.getSummary();

      setSummary({
        ...EMPTY_SUMMARY,
        ...data,
      });

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
