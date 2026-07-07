import { FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  return (
    <button className="rounded-lg p-2 transition hover:bg-gray-100">
      <FiMoon size={20} />
    </button>
  );
};

export default ThemeToggle;
