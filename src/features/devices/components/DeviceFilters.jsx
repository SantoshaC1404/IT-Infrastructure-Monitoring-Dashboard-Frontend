import Select from "../../../components/common/Select";

const DeviceFilters = ({
  status,
  type,
  monitoring,
  onStatusChange,
  onTypeChange,
  onMonitoringChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Select
        value={status}
        onChange={onStatusChange}
        options={[
          { label: "All Status", value: "" },
          { label: "Online", value: "online" },
          { label: "Offline", value: "offline" },
        ]}
      />

      <Select
        value={type}
        onChange={onTypeChange}
        options={[
          { label: "All Types", value: "" },
          { label: "Linux Server", value: "Linux Server" },
          { label: "Windows Server", value: "Windows Server" },
          { label: "Router", value: "Router" },
          { label: "Firewall", value: "Firewall" },
        ]}
      />

      <Select
        value={monitoring}
        onChange={onMonitoringChange}
        options={[
          { label: "Monitoring", value: "" },
          { label: "Enabled", value: "enabled" },
          { label: "Disabled", value: "disabled" },
        ]}
      />
    </div>
  );
};

export default DeviceFilters;
