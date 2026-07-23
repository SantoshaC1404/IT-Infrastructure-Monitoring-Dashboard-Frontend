import { FiX } from "react-icons/fi";

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      <button
        onClick={onClose}
        className="
          rounded-lg
          p-2
          bg-red-400
          text-gray-500
          transition
          hover:bg-red-300
          hover:text-gray-700
        "
      >
        <FiX size={25} />
      </button>
    </div>
  );
};

export default ModalHeader;
