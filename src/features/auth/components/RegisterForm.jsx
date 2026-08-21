import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiShield } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { useAuth } from "../../../contexts/AuthContext";

import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/common/PasswordInput";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";

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
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 rounded-full bg-blue-100 p-4">
          <FiShield size={40} className="text-blue-600" />
        </div>

        <h1 className="text-2xl font-bold">Create Account</h1>

        <p className="mt-2 text-sm text-gray-500">
          Register to access IT Monitoring
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Full Name"
          placeholder="Jane Doe"
          leftIcon={<FiUser />}
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full name is required",
            minLength: { value: 2, message: "Too short." },
          })}
        />

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

        <Input
          label="Username"
          placeholder="jdoe"
          leftIcon={<FiUser />}
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
            minLength: { value: 3, message: "At least 3 characters." },
          })}
        />

        <PasswordInput
          label="Password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "At least 8 characters." },
          })}
        />

        <div className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>

        <Button type="submit" fullWidth loading={loading}>
          Create Account
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;
