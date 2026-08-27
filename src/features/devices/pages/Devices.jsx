import DashboardLayout from "../../dashboard/components/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";
import ConfirmModal from "../../../components/common/ConfirmModal";

import DeviceToolbar from "../toolbar/DeviceToolbar";
import DeviceTable from "../table/DeviceTable";

import DeviceModal from "../modals/DeviceModal";
import DeviceDetailsModal from "../modals/DeviceDetailsModal";

import useDevicePage from "../hooks/useDevicePage";
import useCriticalDevices from "../hooks/useCriticalDevices";
import { useSearchParams } from "react-router-dom";
import CriticalDevicesTable from "../components/CriticalDevicesTable";

const Device = () => {
  const [searchParams] = useSearchParams();

  const view = searchParams.get("view") || "all";

  const showCriticalDevices = view === "critical";

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

  const { devices: criticalDevices, loading: criticalLoading } =
    useCriticalDevices();

  return (
    <DashboardLayout>
      <PageHeader
        title={showCriticalDevices ? "Critical Devices" : "Devices"}
        description={
          showCriticalDevices
            ? "Devices exceeding configured resource thresholds."
            : "Manage and monitor infrastructure devices."
        }
      />

      {/* Toolbar only for normal inventory */}
      {!showCriticalDevices && (
        <DeviceToolbar
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          monitoringFilter={monitoringFilter}
          onStatusFilterChange={setStatusFilter}
          onMonitoringFilterChange={setMonitoringFilter}
          onAddDevice={deviceModal.openCreate}
        />
      )}

      {/* Critical Devices */}
      {/* {showCriticalDevices ? (
        <CriticalDevicesTable
          devices={criticalDevices}
          loading={criticalLoading}
          onView={handleView}
          onEdit={deviceModal.openEdit}
          onDelete={requestDelete}
        />
      ) : (
        <DeviceTable
          devices={devices}
          loading={loading}
          onView={handleView}
          onEdit={deviceModal.openEdit}
          onDelete={requestDelete}
        />
      )} */}

      {/* Critical Devices */}
      {showCriticalDevices ? (
        <CriticalDevicesTable
          devices={criticalDevices}
          loading={criticalLoading}
        />
      ) : (
        /* Normal Device Inventory */
        <DeviceTable
          devices={devices}
          loading={loading}
          onView={handleView}
          onEdit={deviceModal.openEdit}
          onDelete={requestDelete}
        />
      )}

      {/* Details */}
      <DeviceDetailsModal
        open={!!selectedDevice}
        device={selectedDevice}
        onClose={closeDetails}
      />

      {/* Device Modal */}
      <DeviceModal
        open={deviceModal.isOpen}
        device={deviceModal.selectedDevice}
        onClose={deviceModal.close}
        onCreate={async (data) => {
          return await addDevice(data);
        }}
        onUpdate={async (id, data) => {
          return await updateDevice(id, data);
        }}
        onTestConnection={testConnection}
      />

      {/* Delete */}
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
