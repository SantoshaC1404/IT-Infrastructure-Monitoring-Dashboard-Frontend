import { Monitor, PanelLeftClose, PanelLeftOpen } from "lucide-react";

const SidebarHeader = ({ collapsed, onToggleCollapse }) => {
  return (
    <div className="border-b border-slate-700 px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center gap-3 overflow-hidden">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-600/10
            "
          >
            <Monitor size={22} className="text-blue-500" />
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold">IT Monitor</h2>

              <p className="truncate text-xs text-slate-400">
                Infrastructure Dashboard
              </p>
            </div>
          )}
        </div>

        {/* Collapse Button */}

        <button
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="
            rounded-lg
            p-2

            transition

            hover:bg-slate-800

            active:scale-95
          "
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
