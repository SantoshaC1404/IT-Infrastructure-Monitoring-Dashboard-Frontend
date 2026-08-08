import Select from "../../../components/common/Select";

const DeviceHistoryToolbar = ({
  devices,
  selectedDevice,
  onDeviceChange,
  range,
  onRangeChange,
}) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <Select
        value={selectedDevice}
        onChange={(e) => onDeviceChange(Number(e.target.value))}
      >
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.name}
          </option>
        ))}
      </Select>

      <Select value={range} onChange={(e) => onRangeChange(e.target.value)}>
        <option value="1h">Last Hour</option>
        <option value="6h">Last 6 Hours</option>
        <option value="12h">Last 12 Hours</option>
        <option value="24h">Last Day</option>
        <option value="7d">Last Week</option>
        <option value="30d">Last Month</option>
      </Select>
    </div>
  );
};

export default DeviceHistoryToolbar;
