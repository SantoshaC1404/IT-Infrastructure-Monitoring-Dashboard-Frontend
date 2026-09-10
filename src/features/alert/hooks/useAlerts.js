import { useCallback, useEffect, useState } from "react";

import alertService from "../services/alertService";

const useAlerts = ({ limit = 50, autoFetch = true } = {}) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch latest alerts
   */
  const fetchAlerts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await alertService.getAlerts(limit);

      setAlerts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch alerts:", error);

      setError(error);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  /**
   * Acknowledge alert
   */
  const acknowledgeAlert = useCallback(
    async (id) => {
      try {
        await alertService.acknowledgeAlert(id);

        await fetchAlerts();
      } catch (error) {
        console.error("Failed to acknowledge alert:", error);

        throw error;
      }
    },
    [fetchAlerts],
  );

  /**
   * Resolve alert
   */
  const resolveAlert = useCallback(
    async (id) => {
      try {
        await alertService.resolveAlert(id);

        await fetchAlerts();
      } catch (error) {
        console.error("Failed to resolve alert:", error);

        throw error;
      }
    },
    [fetchAlerts],
  );

  /**
   * Initial fetch
   */
  useEffect(() => {
    if (autoFetch) {
      fetchAlerts();
    }
  }, [autoFetch, fetchAlerts]);

  return {
    alerts,
    loading,
    error,

    fetchAlerts,

    acknowledgeAlert,
    resolveAlert,
  };
};

export default useAlerts;
