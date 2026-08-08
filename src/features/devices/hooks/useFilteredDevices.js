import { useMemo } from "react";
import { useThresholds } from "../../monitoring/contexts/ThresholdsContext";

const useFilteredDevices = ({
  devices = [],
  search = "",
  statusFilter = "all",
  monitoringFilter = "all",
  criticalOnly,
}) => {

  const keyword = search.trim().toLowerCase();

  const { cpu: CPU_THRESHOLD, memory: MEMORY_THRESHOLD, disk: DISK_THRESHOLD } = useThresholds();

  const isCritical = (device) =>
    (device.cpu_usage ?? 0) >= (CPU_THRESHOLD ?? 95) ||
    (device.memory_usage ?? 0) >= (MEMORY_THRESHOLD ?? 90) ||
    (device.disk_usage ?? 0) >= (DISK_THRESHOLD ?? 90);

  return useMemo(() => {
    return devices.filter((device) => {
      // Search only required fields
      const matchesSearch =
        keyword === "" ||
        `${device.name ?? ""}
         ${device.hostname ?? ""}
         ${device.ip_address ?? ""}
         ${device.username ?? ""}
         ${device.status ?? ""}`
          .toLowerCase()
          .includes(keyword);

      const matchesStatus =
        statusFilter === "all" ||
        device.status?.toLowerCase() === statusFilter.toLowerCase();

      const matchesMonitoring =
        monitoringFilter === "all" ||
        (monitoringFilter === "enabled"
          ? device.monitoring_enabled
          : !device.monitoring_enabled);

      const matchesCritical =
        !criticalOnly || isCritical(device);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesMonitoring &&
        matchesCritical
      );
      
    });
  }, [devices, keyword, statusFilter, monitoringFilter, CPU_THRESHOLD, MEMORY_THRESHOLD, DISK_THRESHOLD]);
};

export default useFilteredDevices;
