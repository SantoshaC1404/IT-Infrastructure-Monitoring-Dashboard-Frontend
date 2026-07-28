import { useMemo } from "react";

const useFilteredDevices = ({
  devices,
  search,
  statusFilter,
  monitoringFilter,
}) => {
  return useMemo(() => {
    return devices.filter((device) => {
      /**
       * Search
       */
      const matchesSearch = Object.values(device)
        .join(" ")
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      /**
       * Status
       */
      const matchesStatus =
        statusFilter === "all" || device.status?.toLowerCase() === statusFilter;

      /**
       * Monitoring
       */
      const matchesMonitoring =
        monitoringFilter === "all" ||
        (monitoringFilter === "enabled"
          ? device.monitoring_enabled
          : !device.monitoring_enabled);

      return matchesSearch && matchesStatus && matchesMonitoring;
    });
  }, [devices, search, statusFilter, monitoringFilter]);
};

export default useFilteredDevices;
