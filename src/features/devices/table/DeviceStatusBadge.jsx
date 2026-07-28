import StatusBadge from "../../../components/common/StatusBadge";

const STATUS_MAP = {
  ONLINE: "online",
  OFFLINE: "offline",
  WARNING: "warning",
  UNKNOWN: "offline",
};

const DeviceStatusBadge = ({ status }) => {
  const badgeStatus = STATUS_MAP[status?.toUpperCase()] || "offline";

  return <StatusBadge status={badgeStatus} />;
};

export default DeviceStatusBadge;
