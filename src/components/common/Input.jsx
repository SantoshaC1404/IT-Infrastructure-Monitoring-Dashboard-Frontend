import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      error,
      required = false,
      disabled = false,

      leftIcon,
      rightIcon,

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

          <input
            ref={ref}
            type={type}
            disabled={disabled}
            {...props}
            className={`
              w-full
              rounded-xl
              border
              bg-white
              py-2.5
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

              ${rightIcon ? "pr-10" : "pr-4"}

              ${className}
            `}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-3 flex items-center">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
