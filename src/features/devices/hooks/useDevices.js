import { useCallback, useEffect, useState } from "react";

import deviceService from "../services/deviceService";

import { showSuccess, showError } from "../../../utils/toast";
import { DEVICE_MESSAGES } from "../constants/deviceMessages";

const useDevices = () => {
  const [devices, setDevices] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  /**
   * Fetch Devices
   */
  const fetchDevices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await deviceService.getAll();

      setDevices(data);
    } catch (err) {
      setError(err.message);
      showError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Create Device
   */
  /*
  const addDevice =
    (async (values) => {
      try {
        console.log("useDevices.addDevice()", values);

        const created = await deviceService.create(values);

        console.log("Created", created);

        setDevices((prev) => [...prev, created]);

        showSuccess("Device added successfully.");

        return created;
      } catch (err) {
        console.error("Create Device Error:", err);

        showError(err.message);

        throw err;
      }
    },
    []);
    */
  const addDevice = async (payload) => {
    console.log("useDevices.addDevice()");
    console.log(payload);

    try {
      const device = await deviceService.create(payload);

      console.log("deviceService returned");
      console.log(device);

      setDevices((prev) => [...prev, device]);

      showSuccess("Device added successfully.");

      return device;
    } catch (err) {
      console.error("Create Device Error:", err);
      showError(err.message || "Unable to add device.");
      throw err;
    }
  };

  /**
   * Update Device
   */
  const updateDevice = useCallback(async (id, values) => {
    try {
      console.log("useDevices.updateDevice()", id, values);

      const updatedDevice = await deviceService.update(id, values);

      console.log("Updated Device:", updatedDevice);

      setDevices((prev) =>
        prev.map((device) => (device.id === id ? updatedDevice : device)),
      );

      showSuccess(updatedDevice?.message || DEVICE_MESSAGES.UPDATE_SUCCESS);

      return updatedDevice;
    } catch (err) {
      console.error("Update Device Error:", err);

      showError(err.message);

      throw err;
    }
  }, []);

  /**
   * Delete Device
   */
  const removeDevice = useCallback(async (id) => {
    try {
      await deviceService.delete(id);

      setDevices((prev) => prev.filter((device) => device.id !== id));

      showSuccess(DEVICE_MESSAGES.DELETE_SUCCESS);
    } catch (err) {
      console.error("Delete Device Error:", err);

      showError(err.message);

      throw err;
    }
  }, []);

  /**
   * Test Connection
   */
  const testConnection = useCallback(async (values) => {
    try {
      console.log("Testing Connection:", values);

      const result = await deviceService.testConnection(values);

      if (result.success) {
        showSuccess(result.message);
      } else {
        showError(result.message);
      }

      return result;
    } catch (err) {
      console.error("Connection Test Error:", err);

      showError(err.message);

      throw err;
    }
  }, []);

  /**
   * Initial Load
   */
  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  return {
    devices,

    loading,

    error,

    fetchDevices,

    addDevice,

    updateDevice,

    removeDevice,

    testConnection,
  };
};

export default useDevices;
