import { useMemo, useState } from "react";

import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import DataTable from "../../../components/common/DataTable";
import StatusBadge from "../../../components/common/StatusBadge";
import EmptyState from "../../../components/common/EmptyState";
import PageHeader from "../../../components/common/PageHeader";

import DeviceToolbar from "../components/DeviceToolbar";
import DeviceAvatar from "../components/DeviceAvatar";
import DeviceTypeBadge from "../components/DeviceTypeBadge";
import DeviceLastSeenBadge from "../components/DeviceLastSeenBadge";

import AddDeviceModal from "../modals/AddDeviceModal";

import { devices } from "../data/devicesData";

const Device = () => {
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const filteredDevices = useMemo(() => {
    return devices.filter((device) =>
      Object.values(device)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

  const handleAddDevice = (device) => {
    console.log(device);

    // Later
    // POST /devices
  };

  const columns = [
    {
      key: "name",
      label: "Device",
      sortable: true,
      render: (row) => (
        <DeviceAvatar
          name={row.name}
          hostname={row.hostname}
          deviceType={row.device_type}
        />
      ),
    },

    {
      key: "ip_address",
      label: "IP Address",
      sortable: true,
    },

    {
      key: "device_type",
      label: "Type",
      render: (row) => <DeviceTypeBadge type={row.device_type} />,
    },

    {
      key: "operating_system",
      label: "Operating System",
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
      render: (row) => <StatusBadge status={row.status} />,
    },

    {
      key: "last_seen",
      label: "Last Seen",
      render: (row) => <DeviceLastSeenBadge lastSeen={row.last_seen} />,
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title="Devices"
        description="Manage and monitor infrastructure devices."
      />

      <DeviceToolbar
        search={search}
        onSearchChange={setSearch}
        onAddDevice={() => setShowAddModal(true)}
      />

      <DataTable
        columns={columns}
        data={filteredDevices}
        renderActions={(device) => (
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
        emptyState={
          <EmptyState
            title="No Devices Found"
            description="Add your first device to begin monitoring."
          />
        }
      />

      <AddDeviceModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddDevice}
      />
    </DashboardLayout>
  );
};

export default Device;
