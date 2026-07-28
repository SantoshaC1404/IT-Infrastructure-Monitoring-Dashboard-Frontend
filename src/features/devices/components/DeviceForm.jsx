import { forwardRef, useEffect, useImperativeHandle } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { deviceSchema } from "../validation/deviceSchema";

import DeviceBasicInfo from "./DeviceBasicInfo";
import DeviceCredentials from "./DeviceCredentials";
import DeviceConnectionNotice from "./DeviceConnectionNotice";

const DEFAULT_VALUES = {
  name: "",
  device_type: "LINUX",
  ip_address: "",
  ssh_port: 22,
  username: "",
  password: "",
};

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

      defaultValues: defaultValues ?? DEFAULT_VALUES,
    });

    /**
     * Populate form while editing.
     */
    useEffect(() => {
      reset(defaultValues ?? DEFAULT_VALUES);
    }, [defaultValues, reset]);

    /**
     * Watch connection fields.
     */
    const connectionFields = watch([
      "device_type",
      "ip_address",
      "ssh_port",
      "username",
      "password",
    ]);

    /**
     * Reset connection verification
     * whenever connection info changes.
     */
    useEffect(() => {
      onConnectionChange?.();
    }, [connectionFields, onConnectionChange]);

    /**
     * Methods exposed to parent modal.
     */
    useImperativeHandle(ref, () => ({
      submit: () => handleSubmit(onSubmit)(),

      reset: () => reset(DEFAULT_VALUES),

      getValues,

      setError,

      clearErrors,
    }));

    return (
      <form className="space-y-8">
        <DeviceBasicInfo register={register} errors={errors} />

        <DeviceCredentials register={register} errors={errors} />

        <DeviceConnectionNotice />
      </form>
    );
  },
);

DeviceForm.displayName = "DeviceForm";

export default DeviceForm;
