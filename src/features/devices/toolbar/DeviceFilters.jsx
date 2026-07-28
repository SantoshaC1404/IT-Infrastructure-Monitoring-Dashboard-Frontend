import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";

const DeviceFilters = ({
  search,
  onSearchChange,

  status,
  onStatusChange,

  monitoring,
  onMonitoringChange,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl border bg-white p-4 lg:flex-row">
      <div className="flex-1">
        <Input
          placeholder="Search devices..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="w-full lg:w-52">
        <Select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          options={[
            { label: "All Status", value: "all" },
            { label: "Online", value: "online" },
            { label: "Offline", value: "offline" },
            { label: "Unknown", value: "unknown" },
          ]}
        />
      </div>

      <div className="w-full lg:w-52">
        <Select
          value={monitoring}
          onChange={(e) => onMonitoringChange(e.target.value)}
          options={[
            { label: "All", value: "all" },
            { label: "Enabled", value: "enabled" },
            { label: "Disabled", value: "disabled" },
          ]}
        />
      </div>
    </div>
  );
};

export default DeviceFilters;
