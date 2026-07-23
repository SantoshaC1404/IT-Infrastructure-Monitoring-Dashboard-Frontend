import { FiChevronDown } from "react-icons/fi";

const Select = ({ label, value, onChange, options = [], className = "" }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-600">{label}</label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="
            w-full
            appearance-none
            rounded-lg
            border
            border-gray-300
            bg-white
            px-4
            py-2.5
            pr-10
            text-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FiChevronDown
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />
      </div>
    </div>
  );
};

export default Select;
