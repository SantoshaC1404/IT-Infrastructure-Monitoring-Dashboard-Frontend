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
  const addDevice = useCallback(async (values) => {
    try {
      const createdDevice = await deviceService.create(values);

      setDevices((prev) => [...prev, createdDevice]);

      showSuccess(DEVICE_MESSAGES.CREATE_SUCCESS);

      return createdDevice;
    } catch (err) {
      showError(err.message);

      throw err;
    }
  }, []);

  /**
   * Update Device
   */
  const updateDevice = useCallback(async (id, values) => {
    try {
      const updatedDevice = await deviceService.update(id, values);

      setDevices((prev) =>
        prev.map((device) => (device.id === id ? updatedDevice : device)),
      );

      showSuccess(DEVICE_MESSAGES.UPDATE_SUCCESS);

      return updatedDevice;
    } catch (err) {
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
      showError(err.message);

      throw err;
    }
  }, []);

  /**
   * Test Device Connection
   */
  const testConnection = useCallback(async (values) => {
    try {
      const result = await deviceService.testConnection(values);

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
