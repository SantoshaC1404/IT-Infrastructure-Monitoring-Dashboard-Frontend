import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import Input from "./Input";

const PasswordInput = forwardRef(
  ({ label, error, required = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        ref={ref}
        label={label}
        type={showPassword ? "text" : "password"}
        error={error}
        required={required}
        leftIcon={<FiLock />}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        }
        {...props}
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
