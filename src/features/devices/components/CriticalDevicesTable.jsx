import Card from "../../../components/common/Card";
import StatusBadge from "../../../components/common/StatusBadge";


const formatPercentage = (value) => {
  if (value == null) {
    return "-";
  }

  return `${Number(value).toFixed(1)}%`;
};

const getReasonStyle = (reason) => {
  switch (reason) {
    case "CPU High":
      return "bg-red-100 text-red-700";

    case "Memory High":
      return "bg-orange-100 text-orange-700";

    case "Disk High":
      return "bg-purple-100 text-purple-700";

    case "Device Offline":
      return "bg-gray-200 text-gray-700";

    default:
      return "bg-red-100 text-red-700";
  }
};

const CriticalDevicesTable = ({
  devices = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <Card>
      {/* Header */}
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

      {/* Loading */}
      {loading ? (
        <div className="py-12 text-center text-sm text-gray-500">
          Loading critical devices...
        </div>
      ) : devices.length === 0 ? (
        /* Empty */
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
        /* Table */
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="border-y border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  #
                </th>

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
                  Status
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Critical Reason
                </th>
              </tr>
            </thead>

            <tbody>
              {devices.map((device, index) => (
                <tr
                  key={device.id}
                  className="border-b border-gray-200 transition hover:bg-red-50/40"
                >
                  {/* # */}
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {index + 1}
                  </td>

                  {/* Device */}
                  <td className="px-4 py-4">
                    <div className="font-semibold text-gray-900">
                      {device.name}
                    </div>
                  </td>

                  {/* IP */}
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {device.ip_address}
                  </td>

                  {/* CPU */}
                  <td className="px-4 py-4 text-sm font-medium">
                    <span
                      className={
                        Number(device.cpu_usage) >= 50
                          ? "font-bold text-red-600"
                          : "text-gray-700"
                      }
                    >
                      {formatPercentage(device.cpu_usage)}
                    </span>
                  </td>

                  {/* Memory */}
                  <td className="px-4 py-4 text-sm font-medium">
                    <span
                      className={
                        Number(device.memory_usage) >= 50
                          ? "font-bold text-orange-600"
                          : "text-gray-700"
                      }
                    >
                      {formatPercentage(device.memory_usage)}
                    </span>
                  </td>

                  {/* Disk */}
                  <td className="px-4 py-4 text-sm font-medium">
                    <span
                      className={
                        Number(device.disk_usage) >= 50
                          ? "font-bold text-purple-600"
                          : "text-gray-700"
                      }
                    >
                      {formatPercentage(device.disk_usage)}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <StatusBadge status={device.status?.toLowerCase()} />
                  </td>

                  {/* Critical Reasons */}
                  <td className="px-4 py-4">
                    {device.critical_reasons?.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {device.critical_reasons.map((reason) => (
                          <span
                            key={reason}
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getReasonStyle(
                              reason,
                            )}`}
                          >
                            {reason}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
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

export default CriticalDevicesTable;
