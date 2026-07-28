import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

const DeviceActions = ({ device, onView, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        title="View Device"
        onClick={() => onView(device)}
        className="rounded-md p-2 text-blue-600 transition hover:bg-blue-100 cursor-pointer"
      >
        <FiEye size={18} />
      </button>

      <button
        title="Edit Device"
        onClick={() => onEdit(device)}
        className="rounded-md p-2 text-amber-600 transition hover:bg-amber-100 cursor-pointer"
      >
        <FaRegEdit size={18} />
      </button>

      <button
        title="Delete Device"
        onClick={() => onDelete(device)}
        className="rounded-md p-2 text-red-600 transition hover:bg-red-100 cursor-pointer"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default DeviceActions;
