import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { useAuth } from "../../../contexts/AuthContext";

const ProfileMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Failed to log out.");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          <FiUser />
        </div>

        <div className="hidden text-left lg:block">
          <p className="font-semibold">{user?.full_name || "User"}</p>
          <p className="text-sm capitalize text-gray-500">
            {user?.role?.toLowerCase() || ""}
          </p>
        </div>

        <FiChevronDown className="hidden lg:block" />
      </button>

      {open && (
        <>
          {/* Click-away layer */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
            >
              <FiLogOut /> Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;
