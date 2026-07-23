import Card from "../common/Card";

const RecentLogs = ({ logs }) => {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Logs</h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {logs.map((log) => (
          <div
            key={log.id}
            className="border-b border-gray-100 pb-4 last:border-none last:pb-0"
          >
            <h3 className="font-medium">{log.message}</h3>

            <p className="text-sm text-gray-500">{log.device}</p>

            <p className="mt-1 text-xs text-gray-400">{log.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentLogs;
