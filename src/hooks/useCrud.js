import { useCallback, useEffect, useState } from "react";

const useCrud = (service, autoLoad = true) => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const fetchAll = useCallback(async () => {
        try {
            setLoading(true);

            const data = await service.getAll();

            setItems(data);

            setError(null);

            return data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [service]);

    const create = async (payload) => {
        const item = await service.create(payload);

        setItems((prev) => [...prev, item]);

        return item;
    };

    const update = async (id, payload) => {
        const updated = await service.update(id, payload);

        setItems((prev) =>
            prev.map((item) => (item.id === id ? updated : item))
        );

        return updated;
    };

    const remove = async (id) => {
        await service.delete(id);

        setItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    if (autoLoad) {
        useEffect(() => {
            fetchAll();
        }, [fetchAll]);
    }

    return {
        items,

        loading,

        error,

        fetchAll,

        create,

        update,

        remove,

        setItems,
    };
};

export default useCrud;