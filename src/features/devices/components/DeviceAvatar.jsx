import { FiServer, FiMonitor, FiHardDrive, FiShield } from "react-icons/fi";

const iconMap = {
  "Linux Server": FiServer,
  "Windows Server": FiMonitor,
  Router: FiHardDrive,
  Firewall: FiShield,
};

const DeviceAvatar = ({ name, hostname, deviceType }) => {
  const Icon = iconMap[deviceType] || FiServer;

  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-blue-100
          text-blue-700
        "
      >
        <Icon size={18} />
      </div>

      <div>
        <p className="font-medium text-gray-900">{name}</p>

        <p className="text-xs text-gray-500">{hostname}</p>
      </div>
    </div>
  );
};

export default DeviceAvatar;
