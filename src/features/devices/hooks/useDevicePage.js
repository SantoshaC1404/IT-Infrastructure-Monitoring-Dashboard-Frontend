import { useState, useCallback } from "react";

import useDevices from "./useDevices";
import useDeviceModal from "./useDeviceModal";
import useFilteredDevices from "./useFilteredDevices";

const useDevicePage = () => {
    /**
     * Search & Filters
     */

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("all");

    const [monitoringFilter, setMonitoringFilter] = useState("all");

    /**
     * View Details
     */

    const [selectedDevice, setSelectedDevice] = useState(null);

    /**
     * Delete
     */

    const [deviceToDelete, setDeviceToDelete] = useState(null);

    /**
     * Device CRUD
     */

    const {
        devices,
        loading,
        error,

        addDevice,
        updateDevice,
        removeDevice,
        testConnection,
    } = useDevices();

    /**
     * Device Modal
     */

    const deviceModal = useDeviceModal();

    /**
     * Filtering
     */

    const filteredDevices = useFilteredDevices({
        devices,
        search,
        statusFilter,
        monitoringFilter,
    });

    /**
     * View
     */

    const handleView = useCallback((device) => {
        setSelectedDevice(device);
    }, []);

    const closeDetails = useCallback(() => {
        setSelectedDevice(null);
    }, []);

    /**
     * Delete
     */

    const requestDelete = useCallback((device) => {
        setDeviceToDelete(device);
    }, []);

    const cancelDelete = useCallback(() => {
        setDeviceToDelete(null);
    }, []);

    const confirmDelete = useCallback(async () => {
        if (!deviceToDelete) return;

        await removeDevice(deviceToDelete.id);

        setDeviceToDelete(null);
    }, [deviceToDelete, removeDevice]);

    return {
        /**
         * Devices
         */

        devices: filteredDevices,

        loading,

        error,

        /**
         * Search
         */

        search,

        setSearch,

        /**
         * Filters
         */

        statusFilter,

        setStatusFilter,

        monitoringFilter,

        setMonitoringFilter,

        /**
         * Details
         */

        selectedDevice,

        handleView,

        closeDetails,

        /**
         * Delete
         */

        deviceToDelete,

        requestDelete,

        cancelDelete,

        confirmDelete,

        /**
         * CRUD
         */

        addDevice,

        updateDevice,

        testConnection,

        /**
         * Modal
         */

        deviceModal,
    };
};

export default useDevicePage;