import { useMemo } from "react";

import DeviceAvatar from "../table/DeviceAvatar";
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
        key: "ssh_port",
        label: "SSH Port",
      },

      {
        key: "username",
        label: "Username",
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
