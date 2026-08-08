import { memo } from "react";

import Card from "../../../components/common/Card";
import StatusBadge from "../../../components/common/StatusBadge";

const DeviceStatusTable = ({ devices, loading }) => {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Device Status</h2>

          <p className="mt-1 text-gray-500">
            Latest health status of monitored devices
          </p>
        </div>

        <button className="text-blue-600 hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-y bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Hostname</th>

              <th className="px-6 py-4 text-left">IP Address</th>

              <th className="px-6 py-4 text-left">CPU</th>

              <th className="px-6 py-4 text-left">Memory</th>

              <th className="px-6 py-4 text-left">Disk</th>

              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="py-10 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              devices.map((device) => (
                <tr key={device.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-5 font-semibold">{device.name}</td>

                  <td className="px-6 py-5">{device.ip_address}</td>

                  <td className="px-6 py-5">
                    {device.cpu_usage != null ? `${device.cpu_usage.toFixed(1)}%` : "--"}
                  </td>

                  <td className="px-6 py-5">
                    {device.memory_usage != null ? `${device.memory_usage.toFixed(1)}%` : "--"}
                  </td>

                  <td className="px-6 py-5">
                    {device.disk_usage != null ? `${device.disk_usage.toFixed(1)}%` : "--"}
                  </td>

                  <td className="px-6 py-5">
                    <StatusBadge status={device.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default memo(DeviceStatusTable);
