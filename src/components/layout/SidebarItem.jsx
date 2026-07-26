import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, collapsed }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `
        group
        relative
        flex
        items-center
        rounded-xl
        transition-all
        duration-300

        ${collapsed ? "justify-center px-3 py-3" : "gap-3 px-4 py-3"}

        ${
          isActive
            ? // ? "bg-blue-600 text-white shadow-lg"
              `
    bg-blue-600
    text-white
    shadow-lg

    before:absolute
    before:left-0
    before:top-2
    before:h-8
    before:w-1
    before:rounded-r-full
    before:bg-white
  `
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
      `
      }
    >
      <Icon size={21} className="shrink-0" />

      {!collapsed && (
        <span
          className="
            whitespace-nowrap
            text-sm
            font-medium
          "
        >
          {item.title}
        </span>
      )}

      {/* Tooltip */}

      {collapsed && (
        <div
          className="
            pointer-events-none
            absolute
            left-16
            z-50

            whitespace-nowrap

            rounded-lg
            bg-slate-950

            px-3
            py-2

            text-sm
            font-medium
            text-white

            opacity-0

            shadow-xl

            transition-all
            duration-200

            group-hover:translate-x-1
            group-hover:opacity-100
          "
        >
          {item.title}
        </div>
      )}
    </NavLink>
  );
};

export default SidebarItem;
