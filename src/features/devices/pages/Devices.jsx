import { useMemo, useState } from "react";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";
import ConfirmModal from "../../../components/common/ConfirmModal";

import DeviceToolbar from "../components/DeviceToolbar";
import DeviceTable from "../components/DeviceTable";

import AddDeviceModal from "../modals/AddDeviceModal";
import DeviceDetailsModal from "../modals/DeviceDetailsModal";

import useDevices from "../hooks/useDevices";

const Device = () => {
  // Search & Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [monitoringFilter, setMonitoringFilter] = useState("all");

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [deviceToDelete, setDeviceToDelete] = useState(null);

  // Business Logic
  const { devices, loading, addDevice, removeDevice, testConnection } =
    useDevices();

  /**
   * Filter Devices
   */
  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch = Object.values(device)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || device.status?.toLowerCase() === statusFilter;

      const matchesMonitoring =
        monitoringFilter === "all" ||
        (monitoringFilter === "enabled"
          ? device.monitoring_enabled
          : !device.monitoring_enabled);

      return matchesSearch && matchesStatus && matchesMonitoring;
    });
  }, [devices, search, statusFilter, monitoringFilter]);

  /**
   * Add Device
   */
  const handleAddDevice = async (device) => {
    await addDevice(device);

    setShowAddModal(false);
  };

  /**
   * Delete Device
   */
  const handleDeleteDevice = async () => {
    if (!deviceToDelete) return;

    await removeDevice(deviceToDelete.id);

    setDeviceToDelete(null);
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Devices"
        description="Manage and monitor infrastructure devices."
      />

      <DeviceToolbar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        monitoringFilter={monitoringFilter}
        onStatusFilterChange={setStatusFilter}
        onMonitoringFilterChange={setMonitoringFilter}
        onAddDevice={() => setShowAddModal(true)}
      />

      <DeviceTable
        devices={filteredDevices}
        loading={loading}
        onView={setSelectedDevice}
        onEdit={(device) => {
          console.log("Edit Device", device);
        }}
        onDelete={setDeviceToDelete}
      />

      <DeviceDetailsModal
        open={!!selectedDevice}
        device={selectedDevice}
        onClose={() => setSelectedDevice(null)}
      />

      <AddDeviceModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddDevice}
        onTestConnection={testConnection}
      />

      <ConfirmModal
        open={!!deviceToDelete}
        title="Delete Device"
        message={`Are you sure you want to delete "${deviceToDelete?.name}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        confirmVariant="danger"
        onCancel={() => setDeviceToDelete(null)}
        onConfirm={handleDeleteDevice}
      />
    </DashboardLayout>
  );
};

export default Device;
