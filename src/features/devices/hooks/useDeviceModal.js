import { useState, useCallback } from "react";

const useDeviceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedDevice, setSelectedDevice] = useState(null);

  /**
   * Open Create Device modal.
   */
  const openCreate = useCallback(() => {
    setSelectedDevice(null);

    setIsOpen(true);
  }, []);

  /**
   * Open Edit Device modal.
   */
  const openEdit = useCallback((device) => {
    setSelectedDevice(device);

    setIsOpen(true);
  }, []);

  /**
   * Close modal.
   */
  const close = useCallback(() => {
    setSelectedDevice(null);

    setIsOpen(false);
  }, []);

  return {
    isOpen,

    selectedDevice,

    isEditing: !!selectedDevice,

    openCreate,

    openEdit,

    close,
  };
};

export default useDeviceModal;