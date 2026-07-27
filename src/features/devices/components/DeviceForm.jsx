import { forwardRef, useEffect, useImperativeHandle } from "react";
import { FiLock, FiMonitor, FiServer, FiUser } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/common/Input";
import { deviceSchema } from "../validation/deviceSchema";

const DeviceForm = forwardRef(
  ({ defaultValues, onSubmit, onConnectionChange }, ref) => {
    const {
      register,
      handleSubmit,
      watch,
      reset,
      getValues,
      setError,
      clearErrors,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(deviceSchema),
      defaultValues: defaultValues ?? {
        name: "",
        device_type: "LINUX",
        ip_address: "",
        ssh_port: 22,
        username: "",
        password: "",
      },
    });

    /**
     * Reset form when default values change.
     * (Useful for Edit Device)
     */
    useEffect(() => {
      if (defaultValues) {
        reset(defaultValues);
      }
    }, [defaultValues, reset]);

    /**
     * Watch only connection fields.
     */
    const deviceType = watch("device_type");
    const ipAddress = watch("ip_address");
    const port = watch("ssh_port");
    const username = watch("username");
    const password = watch("password");

    /**
     * Clear connection status whenever
     * any connection field changes.
     */
    useEffect(() => {
      onConnectionChange?.();
    }, [deviceType, ipAddress, port, username, password, onConnectionChange]);

    /**
     * Expose methods to parent.
     */
    useImperativeHandle(ref, () => ({
      submit: () => handleSubmit(onSubmit)(),

      reset: () =>
        reset({
          name: "",
          device_type: "LINUX",
          ip_address: "",
          ssh_port: 22,
          username: "",
          password: "",
        }),

      getValues,

      setError,

      clearErrors,
    }));

    return (
      <form className="space-y-8">
        {/* Device Information */}
        <section>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-gray-800">
            <FiServer />
            Device Information
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Device Name"
              required
              placeholder="Ubuntu Server"
              {...register("name")}
              error={errors.name?.message}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Device Type
              </label>

              <select
                {...register("device_type")}
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-2.5
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-200
                "
              >
                <option value="LINUX">Linux</option>
                <option value="WINDOWS">Windows</option>
              </select>
            </div>

            <Input
              label="IP Address"
              required
              placeholder="192.168.1.100"
              {...register("ip_address")}
              error={errors.ip_address?.message}
            />

            <Input
              label="SSH Port"
              required
              type="number"
              {...register("ssh_port")}
              error={errors.ssh_port?.message}
            />
          </div>
        </section>

        {/* Credentials */}
        <section>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-gray-800">
            <FiUser />
            Credentials
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Username"
              required
              leftIcon={<FiUser />}
              {...register("username")}
              error={errors.username?.message}
            />

            <Input
              label="Password"
              required
              type="password"
              leftIcon={<FiLock />}
              {...register("password")}
              error={errors.password?.message}
            />
          </div>
        </section>

        {/* Connection Notice */}
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <FiMonitor size={18} className="mt-1 text-blue-600" />

            <div>
              <h4 className="font-medium text-blue-700">
                Connection Verification
              </h4>

              <p className="mt-1 text-sm text-blue-600">
                Verify the SSH connection before saving the device. Any changes
                to the connection settings will require a new verification.
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  },
);

DeviceForm.displayName = "DeviceForm";

export default DeviceForm;
