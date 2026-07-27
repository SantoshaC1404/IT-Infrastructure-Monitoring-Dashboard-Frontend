import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SidebarItem = ({ item, collapsed }) => {
  const Icon = item.icon;

  return (
    <>
      <NavLink
        to={item.path}
        data-tooltip-id={`sidebar-${item.title}`}
        data-tooltip-content={collapsed ? item.title : ""}
        className={({ isActive }) =>
          `
            group
            relative
            flex
            items-center

            // ${collapsed ? "justify-center" : "justify-between"}
            ${
              collapsed
                ? "justify-center w-12 h-12 mx-auto"
                : "justify-between h-12"
            }

            rounded-xl
            px-3

            transition-all
            duration-200

            ${
              isActive
                ? "from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-900/30"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }
          `
        }
      >
        {/* LEFT */}

        <div className="flex items-center gap-3 overflow-hidden">
          <Icon
            size={20}
            className="
              shrink-0
              transition-transform
              duration-200
              group-hover:scale-110
            "
          />

          {!collapsed && (
            <span
              className="
                truncate
                text-sm
                font-medium
              "
            >
              {item.title}
            </span>
          )}
        </div>

        {/* RIGHT BADGE */}

        {!collapsed && item.badge && (
          <span
            className="
              rounded-full
              bg-red-500
              px-2
              py-0.5

              text-[11px]
              font-semibold
              text-white
            "
          >
            {item.badge}
          </span>
        )}

        {/* Notification Dot */}

        {collapsed && item.badge && (
          <span
            className="
              absolute
              right-3
              top-3

              h-2
              w-2

              rounded-full
              bg-red-500
            "
          />
        )}
      </NavLink>

      {collapsed && (
        <Tooltip
          id={`sidebar-${item.title}`}
          place="right"
          delayShow={300}
          style={{
            backgroundColor: "#0f172a",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "13px",
            padding: "8px 12px",
          }}
        />
      )}
    </>
  );
};

export default SidebarItem;
