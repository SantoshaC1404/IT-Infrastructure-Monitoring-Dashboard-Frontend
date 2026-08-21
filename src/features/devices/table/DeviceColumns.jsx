import { useMemo } from "react";

import DeviceAvatar from "../table/DeviceAvatar";
import DeviceActions from "../table/DeviceActions";
import DeviceStatusBadge from "../table/DeviceStatusBadge";
import DeviceMonitoringBadge from "../table/DeviceMonitoringBadge";

const useDeviceColumns = ({
  onView,
  onEdit,
  onDelete,
  criticalOnly = false,
}) => {
  return useMemo(() => {
    const columns = [
      {
        key: "name",
        label: "Device",
        render: (device) => (
          <DeviceAvatar
            name={device.name}
            hostname={device.ip_address}
            deviceType={device.device_type}
          />
        ),
      },

      {
        key: "ip_address",
        label: "IP Address",
      },

      {
        key: "cpu_usage",
        label: "CPU",
        render: (device) => `${Number(device.cpu_usage ?? 0).toFixed(1)}%`,
      },

      {
        key: "memory_usage",
        label: "Memory",
        render: (device) => `${Number(device.memory_usage ?? 0).toFixed(1)}%`,
      },

      {
        key: "disk_usage",
        label: "Disk",
        render: (device) => `${Number(device.disk_usage ?? 0).toFixed(1)}%`,
      },

      {
        key: "monitoring_enabled",
        label: "Monitoring",
        render: (device) => (
          <DeviceMonitoringBadge enabled={device.monitoring_enabled} />
        ),
      },
    ];

    /*
     * Critical Reason
     *
     * Only show this when the user is
     * viewing critical devices.
     */

    if (criticalOnly) {
      columns.push({
        key: "critical_reason",
        label: "Critical Reason",
        render: (device) =>
          device.critical_reason ? (
            <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
              {device.critical_reason}
            </span>
          ) : (
            <span className="text-gray-400">-</span>
          ),
      });
    }

    columns.push(
      {
        key: "status",
        label: "Status",
        render: (device) => <DeviceStatusBadge status={device.status} />,
      },

      {
        key: "actions",
        label: "Actions",
        align: "center",
        render: (device) => (
          <DeviceActions
            device={device}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ),
      },
    );

    return columns;
  }, [onView, onEdit, onDelete, criticalOnly]);
};

export default useDeviceColumns;
