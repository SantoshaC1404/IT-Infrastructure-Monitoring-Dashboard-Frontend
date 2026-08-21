import Card from "../../../components/common/Card";
import StatusBadge from "../../../components/common/StatusBadge";

const formatPercentage = (value) => {
  if (value == null) {
    return "-";
  }

  return `${Number(value).toFixed(1)}%`;
};

const CriticalDeviceTable = ({ devices = [], loading = false }) => {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Critical Devices
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Devices exceeding configured resource thresholds.
          </p>
        </div>

        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          {devices.length} Critical
        </span>
      </div>

      {loading ? (
        <div className="py-12 text-center text-sm text-gray-500">
          Loading critical devices...
        </div>
      ) : devices.length === 0 ? (
        <div className="py-12 text-center">
          <h3 className="text-sm font-semibold text-gray-800">
            No Critical Devices
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            All monitored devices are currently within configured resource
            thresholds.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="border-y border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Device
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  IP Address
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  CPU
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Memory
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Disk
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Reason
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {devices.map((device) => (
                <tr
                  key={device.id}
                  className="border-b border-gray-200 transition hover:bg-red-50/40"
                >
                  <td className="px-4 py-4">
                    <div className="font-semibold text-gray-900">
                      {device.name}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700">
                    {device.ip_address}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium">
                    {formatPercentage(device.cpu_usage)}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium">
                    {formatPercentage(device.memory_usage)}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium">
                    {formatPercentage(device.disk_usage)}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      {device.critical_reason || "Critical"}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <StatusBadge status={device.status?.toLowerCase()} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};

export default CriticalDeviceTable;
