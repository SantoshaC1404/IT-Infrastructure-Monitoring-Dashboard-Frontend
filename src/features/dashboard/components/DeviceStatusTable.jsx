import DataTable from "../../../components/common/DataTable";
import StatusBadge from "../../../components/common/StatusBadge";

const DeviceStatusTable = ({ devices }) => {
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
      key: "cpu",
      label: "CPU",
      render: (row) => `${row.cpu}%`,
    },
    {
      key: "memory",
      label: "Memory",
      render: (row) => `${row.memory}%`,
    },
    {
      key: "disk",
      label: "Disk",
      render: (row) => `${row.disk}%`,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <DataTable
      title="Device Status"
      subtitle="Latest health status of monitored devices"
      headerAction={
        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      }
      columns={columns}
      data={devices}
      rowsPerPage={5}
    />
  );
};

export default DeviceStatusTable;
