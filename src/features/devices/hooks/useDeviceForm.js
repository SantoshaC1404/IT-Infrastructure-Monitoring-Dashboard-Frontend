import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import deviceService from "../../../services/deviceService";

const schema = z.object({
  name: z
    .string()
    .min(2, "Device name is required."),

  device_type: z.enum(["LINUX", "WINDOWS", "SWITCH", "UPS",]),

  ip_address: z
    .string()
    .min(1, "IP Address is required."),

  ssh_port: z
    .coerce
    .number()
    .min(1)
    .max(65535),

  username: z
    .string()
    .min(1, "Username is required."),

  password: z
    .string()
    .min(1, "Password is required."),
});

const defaultValues = {
  name: "",
  device_type: "LINUX",
  ip_address: "",
  ssh_port: 22,
  username: "",
  password: "",
};

const useDeviceForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const [testingConnection, setTestingConnection] = useState(false);

  const [connectionResult, setConnectionResult] = useState(null);

  const [connectionVerified, setConnectionVerified] = useState(false);

  /**
   * Reset connection state whenever
   * user changes connection details.
   */

  const resetConnectionState = () => {
    setConnectionVerified(false);

    setConnectionResult(null);
  };

  const testConnection = async () => {
    const values = watch();

    try {
      clearErrors();

      setTestingConnection(true);

      const result = await deviceService.testConnection(values);

      setConnectionResult(result);

      setConnectionVerified(result.success);

      return result;
    } catch (error) {
      setConnectionVerified(false);

      setConnectionResult({
        success: false,
        message: error.message,
      });

      return null;
    } finally {
      setTestingConnection(false);
    }
  };

  return {
    register,

    handleSubmit,

    watch,

    reset,

    errors,

    isSubmitting,

    testConnection,

    testingConnection,

    connectionResult,

    connectionVerified,

    resetConnectionState,
  };
};

export default useDeviceForm;