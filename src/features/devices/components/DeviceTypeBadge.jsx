import { FiServer, FiMonitor, FiShield, FiHardDrive } from "react-icons/fi";

const CONFIG = {
  "Linux Server": {
    icon: <FiServer size={14} />,
    className: "bg-blue-100 text-blue-700",
  },

  "Windows Server": {
    icon: <FiMonitor size={14} />,
    className: "bg-cyan-100 text-cyan-700",
  },

  Router: {
    icon: <FiHardDrive size={14} />,
    className: "bg-purple-100 text-purple-700",
  },

  Firewall: {
    icon: <FiShield size={14} />,
    className: "bg-red-100 text-red-700",
  },
};

const DeviceTypeBadge = ({ type }) => {
  const config = CONFIG[type] || {
    icon: <FiServer size={14} />,
    className: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`
      inline-flex
      items-center
      gap-2
      rounded-full
      px-3
      py-1
      text-xs
      font-medium
      ${config.className}
    `}
    >
      {config.icon}

      {type}
    </span>
  );
};

export default DeviceTypeBadge;
