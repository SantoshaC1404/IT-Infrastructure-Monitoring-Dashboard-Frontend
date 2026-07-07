import {
  FiHome,
  FiServer,
  FiBox,
  FiSettings,
  FiCpu,
  FiFileText,
  FiAlertTriangle,
  FiShield,
  FiUsers,
  FiSliders,
} from "react-icons/fi";

import SidebarItem from "./SidebarItem";

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: FiHome },
  { title: "Servers", path: "/servers", icon: FiServer },
  { title: "Docker", path: "/docker", icon: FiBox },
  { title: "Services", path: "/services", icon: FiSettings },
  { title: "Processes", path: "/processes", icon: FiCpu },
  { title: "Logs", path: "/logs", icon: FiFileText },
  { title: "Alerts", path: "/alerts", icon: FiAlertTriangle },
  { title: "SSL", path: "/ssl", icon: FiShield },
  { title: "Users", path: "/users", icon: FiUsers },
  { title: "Settings", path: "/settings", icon: FiSliders },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
      fixed
      left-0
      top-0
      z-50
      h-screen
      w-72
      bg-slate-900
      text-white
      transform
      transition-transform
      duration-300

      ${isOpen ? "translate-x-0" : "-translate-x-full"}

      lg:static
      lg:translate-x-0
      lg:flex
      lg:flex-col
    `}
      >
        {/* Existing Sidebar Content */}
      </aside>
    </>
  );
};

export default Sidebar;
