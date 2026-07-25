import useCrud from "../../../hooks/useCrud";
import userService from "../../../services/userService";

const useUsers = () => {
    const crud = useCrud(userService);

    return {
        users: crud.items,

        loading: crud.loading,

        error: crud.error,

        fetchUsers: crud.fetchAll,

        addUser: crud.create,

        updateUser: crud.update,

        removeUser: crud.remove,
    };
};

export default useUsers;