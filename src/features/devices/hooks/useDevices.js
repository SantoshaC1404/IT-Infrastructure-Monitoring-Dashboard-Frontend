import useCrud from "../../../hooks/useCrud";

import deviceService from "../../../services/deviceService";

const useDevices = () => {
    const crud = useCrud(deviceService);

    return {
        devices: crud.items,

        loading: crud.loading,

        error: crud.error,

        fetchDevices: crud.fetchAll,

        addDevice: crud.create,

        updateDevice: crud.update,

        removeDevice: crud.remove,
    };
};

export default useDevices;