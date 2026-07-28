import StatusBadge from "../../../components/common/StatusBadge";

const DeviceMonitoringBadge = ({ enabled }) => {
  return <StatusBadge status={enabled ? "enabled" : "disabled"} />;
};

export default DeviceMonitoringBadge;
