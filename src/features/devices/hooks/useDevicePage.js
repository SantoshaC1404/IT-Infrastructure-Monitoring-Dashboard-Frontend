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

    /*
     * ----------------------------------------
     * URL Filters
     * ----------------------------------------
     */

    const statusFromUrl =
        searchParams.get("status") || "all";

    const monitoringFromUrl =
        searchParams.get("monitoring") || "all";

    const criticalFromUrl =
        searchParams.get("critical") === "true";

    /*
     * ----------------------------------------
     * Search & Filters
     * ----------------------------------------
     */

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState(statusFromUrl);

    const [monitoringFilter, setMonitoringFilter] =
        useState(monitoringFromUrl);

    const [criticalOnly, setCriticalOnly] =
        useState(criticalFromUrl);

    /*
     * ----------------------------------------
     * Sync URL -> State
     * ----------------------------------------
     */

    useEffect(() => {
        setStatusFilter(
            searchParams.get("status") || "all"
        );

        setMonitoringFilter(
            searchParams.get("monitoring") || "all"
        );

        setCriticalOnly(
            searchParams.get("critical") === "true"
        );
    }, [searchParams]);

    /*
     * ----------------------------------------
     * Selected Device
     * ----------------------------------------
     */

    const [selectedDevice, setSelectedDevice] =
        useState(null);

    /*
     * ----------------------------------------
     * Delete
     * ----------------------------------------
     */

    const [deviceToDelete, setDeviceToDelete] =
        useState(null);

    /*
     * ----------------------------------------
     * Device API
     * ----------------------------------------
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

    /*
     * ----------------------------------------
     * Device Modal
     * ----------------------------------------
     */

    const deviceModal = useDeviceModal();

    /*
     * ----------------------------------------
     * Filtering
     * ----------------------------------------
     */

    const filteredDevices = useFilteredDevices({
        devices,
        search,
        statusFilter,
        monitoringFilter,
        criticalOnly,
    });

    /*
     * ----------------------------------------
     * View
     * ----------------------------------------
     */

    const handleView = useCallback((device) => {
        setSelectedDevice(device);
    }, []);

    const closeDetails = useCallback(() => {
        setSelectedDevice(null);
    }, []);

    /*
     * ----------------------------------------
     * Delete
     * ----------------------------------------
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

    /*
     * ----------------------------------------
     * Return
     * ----------------------------------------
     */

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

        criticalOnly,

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