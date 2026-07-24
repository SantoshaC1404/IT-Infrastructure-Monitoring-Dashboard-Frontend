import { useEffect, useState } from "react";

import deviceService from "../../../services/deviceService";

const useDevices = () => {
    const [devices, setDevices] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const fetchDevices = async () => {
        try {
            setLoading(true);

            const devices = await deviceService.getAll();

            setDevices(devices);

            setError(null);
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const addDevice = async (payload) => {
        const device = await deviceService.create(payload);

        setDevices((prev) => [...prev, device]);

        return device;
    };

    const removeDevice = async (id) => {
        await deviceService.delete(id);

        setDevices((prev) => prev.filter((device) => device.id !== id));
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    return {
        devices,
        loading,
        error,
        fetchDevices,
        addDevice,
        removeDevice,
    };
};

export default useDevices;
