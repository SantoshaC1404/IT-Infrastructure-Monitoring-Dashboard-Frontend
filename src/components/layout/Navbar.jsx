import { FiMenu } from "react-icons/fi";

// import NotificationBell from "./NotificationBell";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import NotificationBell from "../../notifications/components/NotificationBell";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
        >
          <FiMenu size={22} />
        </button>

        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        <NotificationBell />

        <ProfileMenu />
      </div>
    </header>
  );
};

export default Navbar;
