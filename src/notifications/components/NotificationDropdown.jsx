import Card from "../../components/common/Card";

import NotificationItem from "./NotificationItem";

const NotificationDropdown = ({ notifications }) => {
  return (
    <Card className="absolute right-0 top-14 w-96 shadow-xl z-50">
      <div className="border-b p-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>

      <button
        className="
        w-full
        border-t
        p-3
        text-blue-600
        hover:bg-gray-50
      "
      >
        View All Notifications
      </button>
    </Card>
  );
};

export default NotificationDropdown;
