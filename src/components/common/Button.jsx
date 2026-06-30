import React from "react";
import { Loader2 } from "lucide-react";

const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",

  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",

  danger: "bg-red-600 hover:bg-red-700 text-white",

  success: "bg-green-600 hover:bg-green-700 text-white",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={`
        flex
        items-center
        justify-center
        gap-2
        rounded-lg
        px-4
        py-2.5
        font-medium
        transition
        duration-200
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${loading || disabled ? "cursor-not-allowed opacity-60" : ""}
      `}
    >
      {loading && <Loader2 className="animate-spin" size={18} />}

      {children}
    </button>
  );
};

export default Button;
