import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiUser, FiShield } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { useAuth } from "../../../contexts/AuthContext";

import Input from "../../../components/common/Input";
import PasswordInput from "../../../components/common/PasswordInput";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ username, password }) => {
    setLoading(true);

    try {
      await login(username, password);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Invalid username or password.");
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

        <h1 className="text-2xl font-bold">IT Monitoring</h1>

        <p className="mt-2 text-sm text-gray-500">Sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Username"
          placeholder="admin"
          leftIcon={<FiUser />}
          error={errors.username?.message}
          {...register("username", { required: "Username is required" })}
        />

        <PasswordInput
          label="Password"
          error={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />

        <div className="flex items-center justify-end text-sm">
          <span className="text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </span>
        </div>

        <Button type="submit" fullWidth loading={loading}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
