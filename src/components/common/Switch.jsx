const Switch = ({ checked = false, onChange, label, disabled = false }) => {
  return (
    <label className="inline-flex cursor-pointer items-center gap-3">
      <div
        className={`
          relative h-6 w-11 rounded-full transition-colors duration-300
          ${checked ? "bg-blue-600" : "bg-gray-300"}
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
        />

        <span
          className={`
            absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md
            transition-transform duration-300
            ${checked ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </div>

      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
    </label>
  );
};

export default Switch;
