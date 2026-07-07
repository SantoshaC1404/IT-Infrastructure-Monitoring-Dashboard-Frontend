import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import DataTable from "../../../components/common/DataTable";
import StatusBadge from "../../../components/common/StatusBadge";

import ServerToolbar from "../components/ServerToolbar";

import { servers } from "../data/serversData";

const columns = [
  {
    key: "hostname",
    label: "Hostname",
  },
  {
    key: "ip",
    label: "IP Address",
  },
  {
    key: "os",
    label: "Operating System",
  },
  {
    key: "cpu",
    label: "CPU",
  },
  {
    key: "memory",
    label: "Memory",
  },
  {
    key: "disk",
    label: "Disk",
  },
  {
    key: "status",
    label: "Status",
    render: (row) => <StatusBadge status={row.status} />,
  },
];

const Servers = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Servers</h1>

        <p className="text-gray-500">
          Manage and monitor infrastructure servers.
        </p>
      </div>

      <ServerToolbar />

      <DataTable
        columns={columns}
        data={servers}
        renderActions={() => (
          <div className="flex justify-center gap-3">
            <button className="text-blue-600 hover:text-blue-800">
              <FiEye />
            </button>

            <button className="text-green-600 hover:text-green-800">
              <FiEdit />
            </button>

            <button className="text-red-600 hover:text-red-800">
              <FiTrash />
            </button>
          </div>
        )}
      />
    </DashboardLayout>
  );
};

export default Servers;
