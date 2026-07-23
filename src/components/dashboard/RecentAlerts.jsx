import Card from "../common/Card";
import StatusBadge from "../common/StatusBadge";

const RecentAlerts = ({ alerts }) => {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Alerts</h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center justify-between rounded-lg border border-gray-100 p-4"
          >
            <div>
              <h3 className="font-medium text-gray-800">{alert.title}</h3>

              <p className="text-sm text-gray-500">{alert.device}</p>

              <p className="mt-1 text-xs text-gray-400">{alert.time}</p>
            </div>

            <StatusBadge status={alert.status} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentAlerts;
