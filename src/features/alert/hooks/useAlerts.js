import { useCallback, useEffect, useState } from "react";

import alertService from "../services/alertService";

const useAlerts = ({ limit = 50, autoFetch = true } = {}) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlerts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await alertService.getAll({
        limit,
      });

      setAlerts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch alerts:", error);

      setError(error);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  const acknowledgeAlert = useCallback(
    async (id) => {
      await alertService.acknowledge(id);
      await fetchAlerts();
    },
    [fetchAlerts],
  );

  const resolveAlert = useCallback(
    async (id) => {
      await alertService.resolve(id);
      await fetchAlerts();
    },
    [fetchAlerts],
  );

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
