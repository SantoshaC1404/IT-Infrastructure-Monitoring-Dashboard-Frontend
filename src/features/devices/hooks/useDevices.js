import { useCallback, useEffect, useState } from "react";

import deviceService from "../../../services/deviceService";

import { showSuccess, showError } from "../../../utils/toast";

const useDevices = () => {
  const [devices, setDevices] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  /**
   * Fetch Devices
   */
  const fetchDevices = useCallback(async () => {
    try {
      setLoading(true);

      setError("");

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
   * Add Device
   */
  const addDevice = async (payload) => {
    try {
      const device = await deviceService.create(payload);

      setDevices((prev) => [...prev, device]);

      showSuccess("Device added successfully.");

      return device;
    } catch (err) {
      showError(err.message);

      throw err;
    }
  };

  /**
   * Update Device
   */
  const updateDevice = async (id, payload) => {
    try {
      const updatedDevice = await deviceService.update(id, payload);

      setDevices((prev) =>
        prev.map((device) => (device.id === id ? updatedDevice : device)),
      );

      showSuccess("Device updated successfully.");

      return updatedDevice;
    } catch (err) {
      showError(err.message);

      throw err;
    }
  };

  /**
   * Delete Device
   */
  const removeDevice = async (id) => {
    try {
      await deviceService.delete(id);

      setDevices((prev) => prev.filter((device) => device.id !== id));

      showSuccess("Device deleted successfully.");
    } catch (err) {
      showError(err.message);

      throw err;
    }
  };

  /**
   * Test Connection
   */
  const testConnection = async (payload) => {
    try {
      const result = await deviceService.testConnection(payload);

      if (result.success) {
        showSuccess(result.message);
      } else {
        showError(result.message);
      }

      return result;
    } catch (err) {
      showError(err.message);

      throw err;
    }
  };

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
