import { Monitor, PanelLeftClose, PanelLeftOpen } from "lucide-react";

// import { PanelLeftOpen, PanelLeftClose, Monitor } from "lucide-react";

import SidebarItem from "./SidebarItem";
import menuSections from "./menuConfig";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarSection from "./SidebarSection";

const Sidebar = ({ isOpen, collapsed, onClose, onToggleCollapse }) => {
  return (
    <>
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
          z-40
          flex
          h-screen
          flex-col
          overflow-hidden
          bg-slate-900
          text-white
          transition-all
          duration-300
        ease-in-out

          ${collapsed ? "w-20" : "w-72"}

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* HEADER */}
        <SidebarHeader
          collapsed={collapsed}
          onToggleCollapse={onToggleCollapse}
        />

        {/* NAVIGATION */}

        <nav
          className="
        sidebar-scroll

        flex-1

        overflow-y-auto
        overflow-x-hidden

        px-3
        py-4
    "
        >
          {menuSections.map((section) => (
            <SidebarSection
              key={section.title}
              section={section}
              collapsed={collapsed}
            />
          ))}
        </nav>

        {/* FOOTER */}
        <SidebarFooter collapsed={collapsed} />
      </aside>
    </>
  );
};

export default Sidebar;
