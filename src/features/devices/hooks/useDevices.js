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
  /*
  const fetchDevices = useCallback(async (signal) => {
    try {
      setLoading(true);
      setError(null);

      const data = await deviceService.getAll(signal);

      setDevices(data);
    } catch (err) {
      // Ignore cancelled requests
      if (
        err.name === "CanceledError" ||
        err.code === "ERR_CANCELED" ||
        signal?.aborted
      ) {
        return;
      }

      setError(err.message);
      showError(err.message || "Unable to fetch devices.");
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);
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

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  /**
   * Initial Load
   */
  useEffect(() => {
    const controller = new AbortController();

    fetchDevices(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchDevices]);

  /**
   * Create Device
   */
  const addDevice = useCallback(async (payload) => {
    try {
      const device = await deviceService.create(payload);

      setDevices((prev) => [...prev, device]);

      showSuccess(DEVICE_MESSAGES.CREATE_SUCCESS);

      return device;
    } catch (err) {
      showError(err.message || "Unable to add device.");
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

      showSuccess(updatedDevice?.message || DEVICE_MESSAGES.UPDATE_SUCCESS);

      return updatedDevice;
    } catch (err) {
      showError(err.message || "Unable to update device.");
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
      showError(err.message || "Unable to delete device.");
      throw err;
    }
  }, []);

  /**
   * Test Connection
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
      showError(err.message || "Connection test failed.");
      throw err;
    }
  }, []);

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
