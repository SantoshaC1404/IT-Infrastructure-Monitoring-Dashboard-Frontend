import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiMail, FiShield } from "react-icons/fi";
import { toast } from "react-hot-toast";

import Input from "../common/Input";
import PasswordInput from "../common/PasswordInput";
import Button from "../common/Button";
import Card from "../common/Card";

const LoginForm = () => {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);

    console.log({
      ...data,
      rememberMe,
    });

    toast.success("Login successful!");

    navigate("/dashboard");
  };

  return (
    <Card className="w-full max-w-md">
      {/* Logo */}

      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 rounded-full bg-blue-100 p-4">
          <FiShield size={40} className="text-blue-600" />
        </div>

        <h1 className="text-2xl font-bold">IT Monitoring</h1>

        <p className="mt-2 text-sm text-gray-500">Sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}

        <Input
          label="Email Address"
          placeholder="admin@example.com"
          leftIcon={<FiMail />}
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter a valid email",
            },
          })}
        />

        {/* Password */}

        <PasswordInput
          label="Password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        {/* Remember */}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}

        <Button type="submit" fullWidth loading={loading}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
