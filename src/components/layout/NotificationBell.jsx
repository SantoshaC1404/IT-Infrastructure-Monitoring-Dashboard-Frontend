import { FiBell } from "react-icons/fi";

const NotificationBell = ({ count = 5 }) => {
  return (
    <button className="relative rounded-lg p-2 transition hover:bg-gray-100">
      <FiBell size={22} />

      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
          {count}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;
