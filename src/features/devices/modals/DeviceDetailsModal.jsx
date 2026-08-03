import {
  FiCpu,
  FiHardDrive,
  FiActivity,
  FiCalendar,
  FiLogIn,
} from "react-icons/fi";

import Modal from "../../../components/common/Modal";
import StatusBadge from "../../../components/common/StatusBadge";

const DetailCard = ({ icon, title, children }) => (
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
      <div className="rounded-lg bg-blue-100 p-2 text-blue-600">{icon}</div>

      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>

    <div className="grid grid-cols-2 gap-x-8 gap-y-5 p-5">{children}</div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div>
    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
      {label}
    </p>

    <div className="text-sm font-medium text-gray-800">{value || "-"}</div>
  </div>
);

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleString();
};

const formatPercentage = (value) => {
  if (value == null) return "-";

  return `${Number(value).toFixed(1)}%`;
};

/** 
const formatUptime = (uptime) => {
  if (uptime == null) return "-";

  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = uptime % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
};
*/
const formatUptime = (seconds) => {
  if (seconds == null) return "-";

  const days = Math.floor(seconds / 86400);

  const hours = Math.floor((seconds % 86400) / 3600);

  const minutes = Math.floor((seconds % 3600) / 60);

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  }

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}m`;
};

const DeviceDetailsModal = ({ open, onClose, device }) => {
  // console.log("Device Details:", device);

  if (!device) return null;

  return (
    <Modal open={open} onClose={onClose} size="xl" title="Device Details">
      <div className="space-y-6">
        {/* Header */}

        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                <FiHardDrive />
              </div>

              <div>
                <h2 className="text-2xl font-bold">{device.name}</h2>

                <p className="mt-1 text-blue-100">{device.ip_address}</p>
              </div>
            </div>

            <StatusBadge status={device.status.toLowerCase()} />
          </div>
        </div>

        {/* Basic Information */}

        <DetailCard icon={<FiCpu />} title="Basic Information">
          <DetailItem label="Device Name" value={device.name} />

          <DetailItem label="IP Address" value={device.ip_address} />

          <DetailItem label="SSH Port" value={device.ssh_port} />

          <DetailItem label="Username" value={device.username} />
        </DetailCard>

        {/* Monitoring */}

        {/* <DetailCard icon={<FiActivity />} title="Monitoring">
          <DetailItem
            label="Status"
            value={<StatusBadge status={device.status.toLowerCase()} />}
          />

          <DetailItem
            label="Monitoring"
            value={
              <StatusBadge
                status={device.monitoring_enabled ? "enabled" : "disabled"}
              />
            }
          />

          <DetailItem label="Last Seen" value={formatDate(device.last_seen)} />
        </DetailCard> */}

        <DetailCard icon={<FiActivity />} title="Monitoring">
          <DetailItem
            label="Status"
            value={<StatusBadge status={device.status.toLowerCase()} />}
          />

          <DetailItem
            label="Monitoring"
            value={
              <StatusBadge
                status={device.monitoring_enabled ? "enabled" : "disabled"}
              />
            }
          />

          <DetailItem
            label="System Uptime"
            value={formatUptime(device.uptime)}
          />

          <DetailItem label="Last Seen" value={formatDate(device.last_seen)} />
        </DetailCard>

        {/* Resource Usage */}

        <DetailCard icon={<FiCpu />} title="Resource Usage">
          <DetailItem
            label="CPU Usage"
            value={formatPercentage(device.cpu_usage)}
          />

          <DetailItem
            label="Memory Usage"
            value={formatPercentage(device.memory_usage)}
          />

          <DetailItem
            label="Disk Usage"
            value={formatPercentage(device.disk_usage)}
          />
        </DetailCard>

        {/* Login Information */}

        <DetailCard icon={<FiLogIn />} title="Login Information">
          <DetailItem label="Login Source" value={device.login_source} />

          <DetailItem
            label="Last Login"
            value={formatDate(device.last_login_time)}
          />
        </DetailCard>

        {/* Timeline */}

        <DetailCard icon={<FiCalendar />} title="Timeline">
          <DetailItem
            label="Created At"
            value={formatDate(device.created_at)}
          />

          <DetailItem
            label="Updated At"
            value={formatDate(device.updated_at)}
          />
        </DetailCard>

        {/* Footer */}
      </div>
    </Modal>
  );
};

export default DeviceDetailsModal;
