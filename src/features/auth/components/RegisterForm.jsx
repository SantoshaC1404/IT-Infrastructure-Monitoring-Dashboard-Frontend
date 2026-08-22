import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiMail, FiShield, FiUser, FiUsers } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { useAuth } from "../../../contexts/AuthContext";
import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/common/PasswordInput";
import Select from "../../../components/common/Select";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";

const ROLE_OPTIONS = [
  { label: "Admin", value: "ADMIN" },
  { label: "User", value: "USER" },
  { label: "Operator", value: "OPERATOR" },
  { label: "Viewer", value: "VIEWER" },
];

const RegisterForm = () => {
  const navigate = useNavigate();

  const { register: registerUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await registerUser({
        full_name: data.fullName,
        email: data.email,
        username: data.username,
        password: data.password,
        role: data.role,
      });

      toast.success("Account created! Please sign in.");

      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      {/* Header */}

      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
          <FiShield size={40} className="text-blue-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 ">Create Account</h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Register to access IT Monitoring
        </p>
      </div>

      {/* Registration Form */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}

        <Input
          label="Full Name"
          placeholder="Jane Doe"
          leftIcon={<FiUser />}
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Too short.",
            },
          })}
        />

        {/* Email */}

        <Input
          label="Email Address"
          placeholder="jane@example.com"
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

        {/* Username */}

        <Input
          label="Username"
          placeholder="jdoe"
          leftIcon={<FiUser />}
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "At least 3 characters.",
            },
          })}
        />

        {/* Password */}

        <PasswordInput
          label="Password"
          placeholder="********"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "At least 8 characters.",
            },
          })}
        />

        {/* Role */}

        <Select
          label="Role"
          required
          leftIcon={<FiUsers />}
          placeholder="Select a role"
          options={ROLE_OPTIONS}
          error={errors.role?.message}
          {...register("role", {
            required: "Please select a role",
          })}
        />

        {/* Login Link */}

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign in
          </Link>
        </div>

        {/* Submit Button */}

        <Button type="submit" fullWidth loading={loading}>
          Create Account
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;
