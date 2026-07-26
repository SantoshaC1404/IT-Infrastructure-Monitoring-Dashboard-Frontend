import Modal from "../../../components/common/Modal";
import StatusBadge from "../../../components/common/StatusBadge";

const DetailItem = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
      {label}
    </span>

    <span className="text-sm text-gray-900">{value || "-"}</span>
  </div>
);

const DeviceDetailsModal = ({ open, onClose, device }) => {
  if (!device) return null;

  return (
    <Modal open={open} onClose={onClose} title="Device Details" size="lg">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">
          <div>
            <h2 className="text-xl font-bold">{device.name}</h2>

            <p className="text-sm text-gray-500">{device.ip_address}</p>
          </div>

          <StatusBadge status={device.status.toLowerCase()} />
        </div>

        {/* Basic Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Basic Information</h3>

          <div className="grid grid-cols-2 gap-6">
            <DetailItem label="Device Name" value={device.name} />

            <DetailItem label="IP Address" value={device.ip_address} />

            <DetailItem label="SSH Port" value={device.ssh_port} />

            <DetailItem label="Username" value={device.username} />

            <DetailItem
              label="Monitoring"
              value={device.monitoring_enabled ? "Enabled" : "Disabled"}
            />

            <DetailItem label="Status" value={device.status} />
          </div>
        </div>

        {/* Dates */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Activity</h3>

          <div className="grid grid-cols-2 gap-6">
            <DetailItem
              label="Created"
              value={new Date(device.created_at).toLocaleString()}
            />

            <DetailItem
              label="Updated"
              value={new Date(device.updated_at).toLocaleString()}
            />

            <DetailItem
              label="Last Seen"
              value={new Date(device.last_seen).toLocaleString()}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeviceDetailsModal;
