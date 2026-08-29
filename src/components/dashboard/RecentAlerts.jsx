import { useNavigate } from "react-router-dom";
import { FiAlertCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";

import Card from "../common/Card";
import StatusBadge from "../common/StatusBadge";

const severityIcons = {
  CRITICAL: <FiAlertCircle size={20} className="text-red-600" />,

  WARNING: <FiAlertTriangle size={20} className="text-yellow-600" />,

  INFO: <FiInfo size={20} className="text-blue-600" />,
};

const RecentAlerts = ({ alerts = [], loading = false }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Recent Alerts</h2>

          <p className="mt-1 text-xs text-gray-500">
            Latest infrastructure events
          </p>
        </div>

        <button
          onClick={() => navigate("/alerts")}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View All
        </button>
      </div>

      {loading ? (
        <div className="py-8 text-center text-sm text-gray-500">
          Loading alerts...
        </div>
      ) : alerts.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-sm font-medium text-gray-700">No recent alerts</p>

          <p className="mt-1 text-xs text-gray-500">
            All monitored devices are operating normally.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center gap-4 rounded-lg border border-gray-100 p-4 transition hover:bg-gray-50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50">
                {severityIcons[alert.severity] || <FiInfo size={20} />}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-medium text-gray-800">
                    {alert.title}
                  </h3>

                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                    {alert.metric}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {alert.device_name}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Current: {Number(alert.current_value).toFixed(1)}%{" · "}
                  Threshold: {Number(alert.threshold).toFixed(1)}%
                </p>
              </div>

              <div className="shrink-0 text-right">
                <StatusBadge status={alert.status?.toLowerCase()} />

                <p className="mt-2 text-xs text-gray-400">
                  {new Date(alert.created_at).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default RecentAlerts;
