import Card from "../../components/common/Card";
import StatusBadge from "../../components/common/StatusBadge";

const NotificationCard = ({ notification }) => {
  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{notification.title}</h3>

          <p className="mt-2 text-gray-500">{notification.message}</p>

          <p className="mt-3 text-sm text-gray-400">{notification.time}</p>
        </div>

        <StatusBadge status={notification.read ? "success" : "warning"} />
      </div>
    </Card>
  );
};

export default NotificationCard;
