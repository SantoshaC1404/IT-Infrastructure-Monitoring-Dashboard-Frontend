import { forwardRef } from "react";
import { FiChevronDown } from "react-icons/fi";

/**
 * Shared select field - same visual language as Input (label, left icon,
 * error message, forwardRef so it works with react-hook-form's register()).
 */
const Select = forwardRef(
  (
    {
      label,
      error,
      required = false,
      disabled = false,

      leftIcon,

      options = [],
      placeholder,
      children,

      // Kept for the handful of places still using controlled
      // value/onChange instead of react-hook-form's register().
      value,
      onChange,

      className = "",

      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}

            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
              {leftIcon}
            </div>
          )}

          <select
            ref={ref}
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...props}
            className={`
              w-full
              appearance-none
              rounded-xl
              border
              bg-white
              py-2.5
              text-sm
              text-gray-900
              outline-none
              transition-all
              duration-200

              ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }

              ${disabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : ""}

              ${leftIcon ? "pl-10" : "pl-4"}
              pr-10

              ${className}
            `}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}

            {children ??
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>

          <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
