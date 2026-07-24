import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

import DataTable from "../../../components/common/DataTable";
import EmptyState from "../../../components/common/EmptyState";
import StatusBadge from "../../../components/common/StatusBadge";

import DeviceAvatar from "./DeviceAvatar";
import DeviceLastSeenBadge from "./DeviceLastSeenBadge";

const DeviceTable = ({ devices, loading, onView, onEdit, onDelete }) => {
  const columns = [
    {
      key: "name",
      label: "Device",
      render: (row) => <DeviceAvatar name={row.name} />,
    },

    {
      key: "ip_address",
      label: "IP Address",
    },

    {
      key: "ssh_port",
      label: "SSH Port",
    },

    {
      key: "username",
      label: "Username",
    },

    {
      key: "monitoring_enabled",
      label: "Monitoring",
      render: (row) => (
        <StatusBadge status={row.monitoring_enabled ? "enabled" : "disabled"} />
      ),
    },

    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status.toLowerCase()} />,
    },

    {
      key: "last_seen",
      label: "Last Seen",
      render: (row) => <DeviceLastSeenBadge lastSeen={row.last_seen} />,
    },
  ];

  return (
    <DataTable
      loading={loading}
      columns={columns}
      data={devices}
      emptyState={
        <EmptyState
          title="No Devices Found"
          description="Add your first device to begin monitoring."
        />
      }
      renderActions={(device) => (
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onView(device)}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FiEye size={18} />
          </button>

          <button
            onClick={() => onEdit(device)}
            className="text-green-600 hover:text-green-800 cursor-pointer"
          >
            <FiEdit size={18} />
          </button>

          <button
            onClick={() => onDelete(device)}
            className="text-red-600 hover:text-red-800 cursor-pointer"
          >
            <FiTrash size={18} />
          </button>
        </div>
      )}
    />
  );
};

export default DeviceTable;
