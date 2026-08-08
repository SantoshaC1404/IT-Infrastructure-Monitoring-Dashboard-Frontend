const DeviceSelector = ({
  devices = [],
  value,
  onChange,
  label = "Device",
  displayField = "ip_address",
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>

      <select
        value={value ?? ""}
        onChange={(e) => onChange(Number(e.target.value))}
        className="min-w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
      >
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device[displayField]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DeviceSelector;