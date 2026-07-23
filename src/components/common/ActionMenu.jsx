import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const ActionMenu = ({ items = [] }) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
            rounded-lg
            p-2
            transition
            hover:bg-gray-100
        "
      >
        <FiMoreVertical size={18} />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            w-56
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            shadow-lg
        "
        >
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-left
                text-sm
                transition
                hover:bg-gray-50
              "
            >
              {item.icon}

              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
