import { useMemo } from "react";
import { useThresholds } from "../../monitoring/contexts/ThresholdsContext";

const useFilteredDevices = ({
  devices = [],
  search = "",
  statusFilter = "all",
  monitoringFilter = "all",
  criticalOnly = false,
}) => {
  const keyword = search.trim().toLowerCase();

  const {
    cpu: CPU_THRESHOLD,
    memory: MEMORY_THRESHOLD,
    disk: DISK_THRESHOLD,
  } = useThresholds();

  return useMemo(() => {
    const isCritical = (device) => {
      const cpu = Number(device.cpu_usage ?? 0);
      const memory = Number(device.memory_usage ?? 0);
      const disk = Number(device.disk_usage ?? 0);

      return (
        cpu >= CPU_THRESHOLD ||
        memory >= MEMORY_THRESHOLD ||
        disk >= DISK_THRESHOLD
      );
    };

    return devices.filter((device) => {
      /*
       * Search
       */

      const matchesSearch =
        keyword === "" ||
        `${device.name ?? ""}
         ${device.hostname ?? ""}
         ${device.ip_address ?? ""}
         ${device.username ?? ""}
         ${device.status ?? ""}`
          .toLowerCase()
          .includes(keyword);

      /*
       * Status
       */

      const matchesStatus =
        statusFilter === "all" ||
        device.status?.toLowerCase() ===
        statusFilter.toLowerCase();

      /*
       * Monitoring
       */

      const matchesMonitoring =
        monitoringFilter === "all" ||
        (monitoringFilter === "enabled"
          ? device.monitoring_enabled
          : !device.monitoring_enabled);

      /*
       * Critical
       */

      const matchesCritical =
        !criticalOnly || isCritical(device);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesMonitoring &&
        matchesCritical
      );
    });
  }, [
    devices,
    keyword,
    statusFilter,
    monitoringFilter,
    criticalOnly,
    CPU_THRESHOLD,
    MEMORY_THRESHOLD,
    DISK_THRESHOLD,
  ]);
};

export default useFilteredDevices;