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

const Sidebar = () => {
  return (
    <aside className="hidden h-screen w-72 bg-slate-900 text-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-xl font-bold">🛡 IT Monitor</h1>

        <p className="mt-1 text-sm text-slate-400">Infrastructure Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-5">
        <p className="text-xs text-slate-400">Version 1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;
