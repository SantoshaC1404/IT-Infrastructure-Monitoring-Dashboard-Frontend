import { FiCheck, FiCheckCircle, FiClock } from "react-icons/fi";

import Card from "../../../components/common/Card";
import StatusBadge from "../../../components/common/StatusBadge";
import Button from "../../../components/common/Button";

const formatPercentage = (value) => {
  if (value == null) {
    return "-";
  }

  return `${Number(value).toFixed(1)}%`;
};

const formatTime = (value) => {
  if (!value) {
    return "-";
  }

  return new Date(value).toLocaleString();
};

const severityClasses = {
  CRITICAL: "bg-red-100 text-red-700",
  WARNING: "bg-yellow-100 text-yellow-700",
  INFO: "bg-blue-100 text-blue-700",
};

const AlertsTable = ({
  alerts = [],
  loading = false,
  onAcknowledge,
  onResolve,
}) => {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">System Alerts</h2>

          <p className="mt-1 text-sm text-gray-500">
            Monitor, acknowledge, and resolve infrastructure alerts.
          </p>
        </div>

        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          {alerts.length} Alerts
        </span>
      </div>

      {loading ? (
        <div className="py-12 text-center text-sm text-gray-500">
          Loading alerts...
        </div>
      ) : alerts.length === 0 ? (
        <div className="py-12 text-center">
          <FiCheckCircle size={36} className="mx-auto mb-3 text-green-500" />

          <h3 className="text-sm font-semibold text-gray-800">
            No Active Alerts
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            All monitored devices are operating within configured thresholds.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="border-y border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Severity
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Alert
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Device
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Metric
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Current
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Threshold
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Time
                </th>

                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-b border-gray-200 transition hover:bg-gray-50"
                >
                  {/* Severity */}
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        severityClasses[alert.severity] ||
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </td>

                  {/* Alert */}
                  <td className="px-4 py-4">
                    <div className="font-semibold text-gray-900">
                      {alert.title}
                    </div>

                    <div className="mt-1 max-w-xs text-xs text-gray-500">
                      {alert.message}
                    </div>
                  </td>

                  {/* Device */}
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {alert.device_ip}
                    </div>

                    <div className="text-xs text-gray-500">
                      {alert.device_name}
                    </div>
                  </td>

                  {/* Metric */}
                  <td className="px-4 py-4">
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                      {alert.metric}
                    </span>
                  </td>

                  {/* Current */}
                  <td className="px-4 py-4 text-sm font-semibold text-red-600">
                    {formatPercentage(alert.current_value)}
                  </td>

                  {/* Threshold */}
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {formatPercentage(alert.threshold)}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <StatusBadge status={alert.status?.toLowerCase()} />
                  </td>

                  {/* Time */}
                  <td className="px-4 py-4 text-xs text-gray-500">
                    {formatTime(alert.created_at)}
                  </td>

                  {/* Actions */}
                  <td className="px-2 py-2">
                    <div className="flex items-center gap-2">
                      {alert.status === "OPEN" && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => onAcknowledge?.(alert.id)}
                        >
                          <FiCheck className="mr-1" />
                          Acknowledge
                        </Button>
                      )}

                      {alert.status !== "RESOLVED" && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => onResolve?.(alert.id)}
                        >
                          <FiCheckCircle className="mr-1" />
                          Resolve
                        </Button>
                      )}
                    </div>
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

export default AlertsTable;
