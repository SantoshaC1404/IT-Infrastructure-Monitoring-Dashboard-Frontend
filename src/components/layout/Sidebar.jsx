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
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

import SidebarItem from "./SidebarItem";

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: FiHome },
  { title: "Devices", path: "/devices", icon: FiServer },
  { title: "Docker", path: "/docker", icon: FiBox },
  { title: "Services", path: "/services", icon: FiSettings },
  { title: "Processes", path: "/processes", icon: FiCpu },
  { title: "Logs", path: "/logs", icon: FiFileText },
  { title: "Alerts", path: "/alerts", icon: FiAlertTriangle },
  { title: "SSL", path: "/ssl", icon: FiShield },
  { title: "Users", path: "/users", icon: FiUsers },
  { title: "Settings", path: "/settings", icon: FiSliders },
];

const Sidebar = ({ isOpen, collapsed, onClose, onToggleCollapse }) => {
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
          top-0
          left-0
          z-40
          h-screen
          bg-slate-900
          text-white
          flex
          flex-col
          overflow-hidden
          transition-all
          duration-300

          ${collapsed ? "w-20" : "w-72"}

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* Sidebar Content */}

        {/* Logo */}

        <div className="border-b border-slate-700">
          <div
            className={`
              flex
              items-center
              justify-between
              p-5
              transition-all
              duration-300
            `}
          >
            <div
              className={`
                flex
                items-center
                gap-3
                overflow-hidden
              `}
            >
              <span className="text-3xl">🛡</span>

              {!collapsed && (
                <div>
                  <h1 className="text-lg font-bold">IT Monitor</h1>

                  <p className="text-xs text-slate-400">
                    Infrastructure Dashboard
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={onToggleCollapse}
              className="hidden rounded-lg p-2 transition hover:bg-slate-800 lg:block"
            >
              {collapsed ? (
                <FiChevronsRight size={18} />
              ) : (
                <FiChevronsLeft size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`
            sidebar-scroll
            flex-1
            overflow-y-auto

            transition-all
            duration-300

            ${collapsed ? "space-y-3 px-2 py-4" : "space-y-2 p-4"}
          `}
        >
          {menuItems.map((item) => (
            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
          ))}
        </nav>

        {/* Footer */}

        <div
          className={`
            border-t
            border-slate-700
            transition-all
            duration-300

            ${collapsed ? "p-3 text-center" : "p-5"}
          `}
        >
          {collapsed ? (
            <p className="text-xs text-slate-400">v1.0</p>
          ) : (
            <p className="text-xs text-slate-400">Version 1.0.0</p>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
