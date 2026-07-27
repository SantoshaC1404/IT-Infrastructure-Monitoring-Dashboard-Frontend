import { FiMenu, FiSidebar } from "react-icons/fi";
import { RiExpandHorizontalSFill } from "react-icons/ri";

import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import NotificationBell from "../../features/notifications/components/NotificationBell";

const Navbar = ({ onMenuClick }) => {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-16
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        px-6
        shadow-sm
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3">
        {/* Mobile */}

        <button
          onClick={onMenuClick}
          className="
            rounded-lg
            p-2
            transition
            hover:bg-gray-100
            lg:hidden
          "
        >
          <FiMenu size={22} />
        </button>

        {/* Desktop Collapse */}

        {/* <button
          onClick={onToggleCollapse}
          className="
            hidden
            rounded-lg
            p-2
            transition
            hover:bg-gray-100
            lg:flex
          "
        >
          {collapsed ? (
            <FiSidebar size={20} />
          ) : (
            <RiExpandHorizontalSFill size={20} />
          )}
        </button> */}

        <SearchBar />
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <NotificationBell />

        <ProfileMenu />
      </div>
    </header>
  );
};

export default Navbar;
