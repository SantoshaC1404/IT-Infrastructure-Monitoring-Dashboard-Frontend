import DashboardLayout from "../../components/layout/DashboardLayout";

import NotificationToolbar from "../components/NotificationToolbar";
import NotificationFilter from "../components/NotificationFilter";
import NotificationList from "../components/NotificationList";

import { notifications } from "../data/notificationsData";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>

        <p className="text-gray-500">View and manage system alerts.</p>
      </div>

      <NotificationToolbar />

      <NotificationFilter />

      <NotificationList notifications={notifications} />
    </DashboardLayout>
  );
};

export default Notifications;
