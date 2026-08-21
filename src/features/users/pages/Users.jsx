import { useState } from "react";
import { toast } from "react-hot-toast";

import DashboardLayout from "../../dashboard/components/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";
import DataTable from "../../../components/common/DataTable";
import StatusBadge from "../../../components/common/StatusBadge";
import Select from "../../../components/common/Select";
import ConfirmModal from "../../../components/common/ConfirmModal";

import { useAuth } from "../../../contexts/AuthContext";
import useUsers from "../hooks/useUsers";

const ROLE_OPTIONS = [
  { label: "Admin", value: "ADMIN" },
  { label: "Operator", value: "OPERATOR" },
  { label: "Viewer", value: "VIEWER" },
];

const Users = () => {
  const { user: currentUser } = useAuth();
  const { users, loading, updateUser, removeUser } = useUsers();

  const [deletingUser, setDeletingUser] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const handleRoleChange = async (user, role) => {
    try {
      await updateUser(user.id, { role });
      toast.success(`${user.username}'s role updated to ${role}.`);
    } catch (err) {
      toast.error(err.message || "Failed to update role.");
    }
  };

  const handleToggleActive = async (user) => {
    try {
      await updateUser(user.id, { is_active: !user.is_active });
      toast.success(
        user.is_active ? `${user.username} deactivated.` : `${user.username} activated.`,
      );
    } catch (err) {
      toast.error(err.message || "Failed to update user.");
    }
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);

    try {
      await removeUser(deletingUser.id);
      toast.success("User deleted.");
      setDeletingUser(null);
    } catch (err) {
      toast.error(err.message || "Failed to delete user.");
    } finally {
      setDeleting(false);
    }
  };

  const columns = [
    {
      key: "full_name",
      label: "Name",
      render: (row) => (
        <div>
          <p className="font-medium text-gray-900">{row.full_name}</p>
          <p className="text-xs text-gray-500">{row.email}</p>
        </div>
      ),
    },
    { key: "username", label: "Username" },
    {
      key: "role",
      label: "Role",
      render: (row) => (
        <Select
          value={row.role}
          onChange={(e) => handleRoleChange(row, e.target.value)}
          options={ROLE_OPTIONS}
          className="w-36"
        />
      ),
    },
    {
      key: "is_active",
      label: "Status",
      render: (row) => (
        <button onClick={() => handleToggleActive(row)}>
          <StatusBadge status={row.is_active ? "enabled" : "disabled"} />
        </button>
      ),
    },
    {
      key: "created_at",
      label: "Joined",
      render: (row) => (
        <span className="text-sm text-gray-500">
          {new Date(row.created_at).toLocaleDateString()}
        </span>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title="Users"
        description="Manage user accounts, roles, and access."
      />

      <DataTable
        columns={columns}
        data={users}
        loading={loading}
        renderActions={(row) =>
          row.id === currentUser?.id ? null : (
            <button
              className="text-sm text-red-600 hover:text-red-800"
              onClick={() => setDeletingUser(row)}
            >
              Delete
            </button>
          )
        }
      />

      <ConfirmModal
        open={Boolean(deletingUser)}
        title="Delete User"
        message={`Are you sure you want to delete "${deletingUser?.username}"? This cannot be undone.`}
        loading={deleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletingUser(null)}
      />
    </DashboardLayout>
  );
};

export default Users;
