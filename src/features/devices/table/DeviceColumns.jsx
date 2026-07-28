import StatusBadge from "../../../components/common/StatusBadge";

import DeviceAvatar from "./DeviceAvatar";
import DeviceActions from "./DeviceActions";

export const getDeviceColumns = ({ onView, onEdit, onDelete }) => [
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
      <StatusBadge
        status={device.monitoring_enabled ? "enabled" : "disabled"}
      />
    ),
  },

  {
    key: "status",
    label: "Status",
    render: (device) => <StatusBadge status={device.status?.toLowerCase()} />,
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
];
