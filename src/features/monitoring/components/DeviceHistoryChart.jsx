import { memo } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import Card from "../../../components/common/Card";
import TimeRangeSelector from "./TimeRangeSelector";

const DeviceHistoryChart = ({
  history,

  devices,
  selectedDevice,
  selectedDeviceId,
  onDeviceChange,

  hours,
  days,
  onHoursChange,
  onDaysChange,
}) => {
  return (
    <Card>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Device Resource History</h2>

          <p className="text-sm text-gray-500">
            CPU, Memory and Disk usage over time
          </p>

          {selectedDevice && (
            <div className="mt-2 inline-flex items-center rounded-lg bg-blue-50 px-3 py-2">
              <span className="text-xs font-medium text-gray-500">
                Selected Device
              </span>

              <span className="ml-2 font-semibold text-blue-700">
                {selectedDevice.ip_address}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-end gap-4">
          {/* Device Selector */}

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">
              Device
            </label>

            <select
              value={selectedDeviceId ?? ""}
              onChange={(e) => onDeviceChange(Number(e.target.value))}
              className="rounded-lg border px-3 py-2"
            >
              {devices.map((device) => (
                <option key={device.id} value={device.id}>
                  {device.ip_address}
                </option>
              ))}
            </select>
          </div>

          <TimeRangeSelector
            hours={hours}
            days={days}
            onHoursChange={onHoursChange}
            onDaysChange={onDaysChange}
          />
          
        </div>
      </div>

      {/* Chart */}

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Legend />

            <Line
              dataKey="cpu"
              name="CPU"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              animationDuration={0}
            />

            <Line
              dataKey="memory"
              name="Memory"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              animationDuration={0}
            />

            <Line
              dataKey="disk"
              name="Disk"
              stroke="#dc2626"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              animationDuration={0}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default memo(DeviceHistoryChart);
