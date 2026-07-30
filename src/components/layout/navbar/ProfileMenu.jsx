import { FiChevronDown, FiUser } from "react-icons/fi";

const ProfileMenu = () => {
  return (
    <button className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
        <FiUser />
      </div>

      <div className="hidden text-left lg:block">
        <p className="font-semibold">Admin</p>
        <p className="text-sm text-gray-500">Administrator</p>
      </div>

      <FiChevronDown className="hidden lg:block" />
    </button>
  );
};

export default ProfileMenu;
