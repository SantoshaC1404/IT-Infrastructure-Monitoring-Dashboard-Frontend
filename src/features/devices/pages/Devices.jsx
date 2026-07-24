import { useMemo, useState } from "react";

import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";
import ConfirmModal from "../../../components/common/ConfirmModal";

import DeviceToolbar from "../components/DeviceToolbar";
import DeviceTable from "../components/DeviceTable";
import AddDeviceModal from "../modals/AddDeviceModal";

import useDevices from "../hooks/useDevices";

import { showSuccess, showError } from "../../../utils/toast";

const Device = () => {
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [deleteDevice, setDeleteDevice] = useState(null);

  const [statusFilter, setStatusFilter] = useState("all");

  const [monitoringFilter, setMonitoringFilter] = useState("all");

  const { devices, loading, addDevice, removeDevice } = useDevices();

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch = Object.values(device)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || device.status.toLowerCase() === statusFilter;

      const matchesMonitoring =
        monitoringFilter === "all" ||
        (monitoringFilter === "enabled"
          ? device.monitoring_enabled
          : !device.monitoring_enabled);

      return matchesSearch && matchesStatus && matchesMonitoring;
    });
  }, [devices, search, statusFilter, monitoringFilter]);

  const handleAddDevice = async (device) => {
    try {
      await addDevice(device);

      showSuccess("Device added successfully.");

      setShowAddModal(false);
    } catch (error) {
      showError(error.message);
    }
  };

  const handleDeleteDevice = async () => {
    if (!deleteDevice) return;

    try {
      await removeDevice(deleteDevice.id);

      showSuccess("Device deleted successfully.");
    } catch (error) {
      showError(error.message);
    } finally {
      setDeleteDevice(null);
    }
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
        onAddDevice={() => setShowAddModal(true)}
      />

      {/* Enable later */}
      {/* <DeviceFilters
        search={search}
        onSearchChange={setSearch}
        status={statusFilter}
        onStatusChange={setStatusFilter}
        monitoring={monitoringFilter}
        onMonitoringChange={setMonitoringFilter}
      /> */}

      <DeviceTable
        devices={filteredDevices}
        loading={loading}
        onView={(device) => {
          console.log("View", device);
        }}
        onEdit={(device) => {
          console.log("Edit", device);
        }}
        onDelete={(device) => {
          setDeleteDevice(device);
        }}
      />

      <AddDeviceModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddDevice}
      />

      <ConfirmModal
        open={!!deleteDevice}
        title="Delete Device"
        message={`Are you sure you want to delete "${deleteDevice?.name}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        confirmVariant="danger"
        onCancel={() => setDeleteDevice(null)}
        onConfirm={handleDeleteDevice}
      />
    </DashboardLayout>
  );
};

export default Device;
