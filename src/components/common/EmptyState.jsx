import { FiInbox } from "react-icons/fi";

const EmptyState = ({
  title = "No Data Found",
  description = "There are no records available.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="rounded-full bg-gray-100 p-4">
        <FiInbox size={40} className="text-gray-400" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-700">{title}</h3>

      <p className="mt-2 text-center text-gray-500">{description}</p>
    </div>
  );
};

export default EmptyState;
