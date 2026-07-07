import Card from "../common/Card";
import StatusBadge from "../common/StatusBadge";

const ServerStatusTable = ({ servers }) => {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Server Status</h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-4 py-3">Hostname</th>
              <th className="px-4 py-3">IP Address</th>
              <th className="px-4 py-3">CPU</th>
              <th className="px-4 py-3">Memory</th>
              <th className="px-4 py-3">Disk</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {servers.map((server) => (
              <tr key={server.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{server.hostname}</td>

                <td className="px-4 py-3">{server.ip}</td>

                <td className="px-4 py-3">{server.cpu}%</td>

                <td className="px-4 py-3">{server.memory}%</td>

                <td className="px-4 py-3">{server.disk}%</td>

                <td className="px-4 py-3">
                  <StatusBadge status={server.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ServerStatusTable;
