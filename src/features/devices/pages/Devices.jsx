import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";
import ConfirmModal from "../../../components/common/ConfirmModal";

import DeviceToolbar from "../toolbar/DeviceToolbar";
import DeviceTable from "../table/DeviceTable";

import DeviceModal from "../modals/DeviceModal";
import DeviceDetailsModal from "../modals/DeviceDetailsModal";

import useDevicePage from "../hooks/useDevicePage";
import Button from "../../../components/common/Button";

const Device = () => {
  const {
    devices,
    loading,

    search,
    setSearch,

    statusFilter,
    setStatusFilter,

    monitoringFilter,
    setMonitoringFilter,

    selectedDevice,
    handleView,
    closeDetails,

    deviceToDelete,
    requestDelete,
    cancelDelete,
    confirmDelete,

    addDevice,
    updateDevice,
    testConnection,

    deviceModal,
  } = useDevicePage();

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
        onAddDevice={deviceModal.openCreate}
      />

      <DeviceTable
        devices={devices}
        loading={loading}
        onView={handleView}
        onEdit={deviceModal.openEdit}
        onDelete={requestDelete}
      />

      <DeviceDetailsModal
        open={!!selectedDevice}
        device={selectedDevice}
        onClose={closeDetails}
      />

      <DeviceModal
        open={deviceModal.isOpen}
        onClose={deviceModal.close}
        // onCreate={addDevice}
        onCreate={async (data) => {
          console.log("Device.jsx onCreate");
          console.log(data);

          const result = await addDevice(data);

          console.log("Device.jsx addDevice returned");
          console.log(result);

          return result;
        }}
        onTestConnection={testConnection}
      />

      <ConfirmModal
        open={!!deviceToDelete}
        title="Delete Device"
        message={`Are you sure you want to delete "${deviceToDelete?.name}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        confirmVariant="danger"
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
      />
    </DashboardLayout>
  );
};

export default Device;
