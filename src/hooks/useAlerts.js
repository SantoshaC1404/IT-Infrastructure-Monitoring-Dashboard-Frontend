import useCrud from "../../../hooks/useCrud";
import alertService from "../../../services/alertService";

const useAlerts = () => {
    const crud = useCrud(alertService);

    return {
        alerts: crud.items,

        loading: crud.loading,

        error: crud.error,

        fetchAlerts: crud.fetchAll,

        addAlert: crud.create,

        updateAlert: crud.update,

        removeAlert: crud.remove,
    };
};

export default useAlerts;