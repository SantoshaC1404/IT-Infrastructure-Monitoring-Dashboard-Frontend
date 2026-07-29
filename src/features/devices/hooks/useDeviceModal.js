import { useState, useCallback, useMemo } from "react";

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

  /**
   * Choose Mode: Create or Edit.
   */
  const mode = useMemo(
    () => (selectedDevice ? "edit" : "create"),

    [selectedDevice],
  );

  return {
    isOpen,

    mode,

    isEditing: mode === "edit",

    selectedDevice,

    openCreate,

    openEdit,

    close,
  };
};

export default useDeviceModal;
