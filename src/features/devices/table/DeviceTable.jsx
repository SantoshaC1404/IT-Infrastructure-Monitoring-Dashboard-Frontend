import DataTable from "../../../components/common/DataTable";
import EmptyState from "../../../components/common/EmptyState";
import useDeviceColumns from "../hooks/useDeviceColumns";

const DeviceTable = ({ devices, loading, onView, onEdit, onDelete }) => {
  const columns = useDeviceColumns({
    onView,
    onEdit,
    onDelete,
  });

  return (
    <DataTable
      title="Device Inventory"
      subtitle="Manage and monitor all infrastructure devices."
      loading={loading}
      columns={columns}
      data={devices}
      emptyState={
        <EmptyState
          title="No Devices Found"
          description="Add your first device to begin monitoring."
        />
      }
    />
  );
};

export default DeviceTable;
