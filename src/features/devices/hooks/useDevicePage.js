import {
    useState,
    useCallback,
    useEffect,
} from "react";

import { useSearchParams } from "react-router-dom";

import useDevices from "./useDevices";
import useDeviceModal from "./useDeviceModal";
import useFilteredDevices from "./useFilteredDevices";

const useDevicePage = () => {
    const [searchParams] = useSearchParams();

    /**
     * Search
     */

    const [search, setSearch] = useState("");

    /**
     * Filters
     */

    const [statusFilter, setStatusFilter] = useState("all");

    const [monitoringFilter, setMonitoringFilter] =
        useState("all");

    const initialCritical =
        searchParams.get("critical") === "true";

    const [criticalOnly, setCriticalOnly] =
        useState(initialCritical);

    /**
     * Read filters from URL
     */

    /*
    useEffect(() => {
        setStatusFilter(
            searchParams.get("status") || "all",
        );

        setMonitoringFilter(
            searchParams.get("monitoring") || "all",
        );
    }, [searchParams]);
    */

    useEffect(() => {
        setStatusFilter(searchParams.get("status") || "all");

        setMonitoringFilter(
            searchParams.get("monitoring") || "all"
        );

        setCriticalOnly(
            searchParams.get("critical") === "true"
        );
    }, [searchParams]);

    /**
     * Details Modal
     */

    const [selectedDevice, setSelectedDevice] =
        useState(null);

    /**
     * Delete Modal
     */

    const [deviceToDelete, setDeviceToDelete] =
        useState(null);

    /**
     * Device API
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
     * Filter devices
     */

    const filteredDevices = useFilteredDevices({
        devices,
        search,
        statusFilter,
        monitoringFilter,
        criticalOnly,
    });

    /**
     * View Details
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
        devices: filteredDevices,

        loading,
        error,

        search,
        setSearch,

        statusFilter,
        setStatusFilter,

        monitoringFilter,
        setMonitoringFilter,

        selectedDevice,
        handleView,
        closeDetails,

        deviceToDelete,
        requestDelete,
        cancelDelete,
        confirmDelete,

        addDevice,
        updateDevice,
        testConnection,

        deviceModal,
    };
};

export default useDevicePage;