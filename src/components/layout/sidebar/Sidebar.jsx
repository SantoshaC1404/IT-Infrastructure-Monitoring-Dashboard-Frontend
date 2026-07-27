import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarSection from "./SidebarSection";

import { menuSections } from "./menuConfig";

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
          left-0
          top-0
          z-40
          flex
          h-screen
          flex-col
          bg-slate-900
          text-white

          overflow-hidden

          transition-all
          duration-300
          ease-in-out

          ${collapsed ? "w-[72px]" : "w-72"}

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* Header */}

        <SidebarHeader
          collapsed={collapsed}
          onToggleCollapse={onToggleCollapse}
        />

        {/* Navigation */}

        <nav
          className={`
            sidebar-scroll

            flex-1

            overflow-y-auto
            overflow-x-hidden

            ${collapsed ? "px-2 py-4" : "px-3 py-4 pr-2"}
          `}
        >
          {menuSections.map((section) => (
            <SidebarSection
              key={section.title}
              section={section}
              collapsed={collapsed}
            />
          ))}
        </nav>

        {/* Footer */}

        <SidebarFooter collapsed={collapsed} />
      </aside>
    </>
  );
};

export default Sidebar;
