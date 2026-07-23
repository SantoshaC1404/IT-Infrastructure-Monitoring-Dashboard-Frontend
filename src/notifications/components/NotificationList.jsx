import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications }) => {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
