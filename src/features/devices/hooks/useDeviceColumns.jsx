import { useMemo } from "react";

import DeviceActions from "../table/DeviceActions";
import DeviceStatusBadge from "../table/DeviceStatusBadge";
import DeviceMonitoringBadge from "../table/DeviceMonitoringBadge";

const useDeviceColumns = ({ onView, onEdit, onDelete }) => {
  return useMemo(
    () => [
      {
        key: "name",
        label: "Device",
        render: (device) => (
          <div>
            <p className="font-semibold text-gray-900">{device.name}</p>

            <p className="text-sm text-gray-500">{device.device_type}</p>
          </div>
        ),
      },

      {
        key: "ip_address",
        label: "IP Address",
      },

      {
        key: "cpu_usage",
        label: "CPU",
        render: (device) =>
          device.cpu_usage != null ? `${device.cpu_usage}%` : "--",
      },

      {
        key: "memory_usage",
        label: "Memory",
        render: (device) =>
          device.memory_usage != null ? `${device.memory_usage}%` : "--",
      },

      {
        key: "disk_usage",
        label: "Disk",
        render: (device) =>
          device.disk_usage != null ? `${device.disk_usage}%` : "--",
      },

      {
        key: "monitoring_enabled",
        label: "Monitoring",
        render: (device) => (
          <DeviceMonitoringBadge enabled={device.monitoring_enabled} />
        ),
      },

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
    ],
    [onView, onEdit, onDelete],
  );
};

export default useDeviceColumns;
