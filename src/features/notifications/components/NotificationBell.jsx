import { useState } from "react";
import { FiBell } from "react-icons/fi";

import NotificationDropdown from "./NotificationDropdown";

import { notifications } from "../data/notificationsData";

const NotificationBell = () => {
  const [open, setOpen] = useState(false);

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-lg p-2 hover:bg-gray-100"
      >
        <FiBell size={22} />

        {unread > 0 && (
          <span
            className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-red-600
            text-xs
            text-white
          "
          >
            {unread}
          </span>
        )}
      </button>

      {open && <NotificationDropdown notifications={notifications} />}
    </div>
  );
};

export default NotificationBell;
