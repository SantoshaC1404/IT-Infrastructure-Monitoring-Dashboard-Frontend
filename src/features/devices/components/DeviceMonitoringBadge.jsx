const DeviceMonitoringBadge = ({ enabled }) => {
  return enabled ? (
    <span
      className="
        rounded-full
        bg-green-100
        px-3
        py-1
        text-xs
        font-medium
        text-green-700
      "
    >
      Enabled
    </span>
  ) : (
    <span
      className="
        rounded-full
        bg-red-100
        px-3
        py-1
        text-xs
        font-medium
        text-red-700
      "
    >
      Disabled
    </span>
  );
};

export default DeviceMonitoringBadge;
