import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-blue-800 hover:text-white"
        }`
      }
    >
      <Icon size={20} />

      <span>{item.title}</span>
    </NavLink>
  );
};

export default SidebarItem;
