import { DEVICE_ICONS, DEFAULT_DEVICE_ICON } from "../constants/deviceIcons";

const DeviceAvatar = ({ name, hostname, deviceType }) => {
  const Icon = DEVICE_ICONS[deviceType] || DEFAULT_DEVICE_ICON;

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="truncate font-medium">{name}</p>

        <p className="truncate text-xs text-gray-500">{hostname}</p>
      </div>
    </div>
  );
};

export default DeviceAvatar;
