import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

const icons = {
  critical: <FiAlertCircle className="text-red-500" size={20} />,
  warning: <FiAlertTriangle className="text-yellow-500" size={20} />,
  success: <FiCheckCircle className="text-green-500" size={20} />,
  info: <FiInfo className="text-blue-500" size={20} />,
};

const NotificationItem = ({ notification }) => {
  return (
    <div
      className={`flex gap-4 border-b p-4 hover:bg-gray-50 ${
        !notification.read ? "bg-blue-50" : ""
      }`}
    >
      <div>{icons[notification.type]}</div>

      <div className="flex-1">
        <h4 className="font-semibold">{notification.title}</h4>

        <p className="text-sm text-gray-500">{notification.message}</p>

        <span className="text-xs text-gray-400">{notification.time}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
